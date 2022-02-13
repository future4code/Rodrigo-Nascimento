import { Request, Response } from "express"
import { connection } from "../connection"
import { selectAllPurchases } from "../data/selectAllPurchases"

export const getAllPurchases = async (req: Request, res: Response): Promise<void> => {
  try {

    const userId: string = req.params.user_id

    const purchases = await selectAllPurchases(userId)

    const userPurchase = purchases.map((prod) => {
        return {
          productId: prod.product_id,
          productName: prod.name,
          price: prod.price,
          quantity: prod.quantity,
          total: prod.total_price
      }
    })

    res.send({result:userPurchase})

  } catch (error: any) {
    res.status(500).send(error.message || error.sqlMessage)
  }
}