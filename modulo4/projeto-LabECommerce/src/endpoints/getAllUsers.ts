import { Request, Response } from "express"
import { selectAllPurchases } from "../data/selectAllPurchases"
import { selectAllUsers } from "../data/selectAllUsers"

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await selectAllUsers()

    for (let i = 0; i < users.length; i++) {
      users[i].purchases = await selectAllPurchases(users[i].id)
    }

    res.send({ result: users })

  } catch (error: any) {
    res.status(500).send(error.message || error.sqlMessage)
  }
}