import { Request, Response } from "express"
import { selectAllPurchases } from "../data/selectAllPurchases"

export const getAllPurchases = async (req: Request, res: Response): Promise<void> => {
  try {
    const userId: string = req.params.user_id

    const purchases = await selectAllPurchases(userId)

    res.send({ result: purchases })

  } catch (error: any) {
    res.status(500).send(error.message || error.sqlMessage)
  }
}