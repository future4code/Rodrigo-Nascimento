import { Request, Response } from "express"
import { connection } from "../connection"

export const getAllPurchases = async (req: Request, res: Response): Promise<void> => {
  try {

    const userId: string = req.params.user_id

    const result = await connection("labecommerce_purchases")
      .select("product_id",
        "labecommerce_products.name",
        "price",
        "quantity",
        "total_price",
        "user_id")
      .join("labecommerce_users", "user_id", "labecommerce_users.id")
      .join("labecommerce_products", "product_id", "labecommerce_products.id")
      .where("user_id", userId)

    const userPurchase = result.map((user) => {
        return {
          productId: user.product_id,
          productName: user.name,
          price: user.price,
          quantity: user.quantity,
          total: user.total_price
      }
    })

    res.send({result:userPurchase})

  } catch (error: any) {
    res.status(500).send(error.message || error.sqlMessage)
  }
}