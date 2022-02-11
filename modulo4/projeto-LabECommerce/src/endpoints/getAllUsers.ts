import { Request, Response } from "express"
import { connection } from "../connection"
import { selectAllPurchases } from "../data/selectAllPurchases"
import { selectAllUsers } from "../data/selectAllUsers"

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  try {

    const users = await selectAllUsers()
    const purchases = await selectAllPurchases()

    res.send(users)

  } catch (error: any) {
    res.status(500).send(error.message || error.sqlMessage)
  }
}