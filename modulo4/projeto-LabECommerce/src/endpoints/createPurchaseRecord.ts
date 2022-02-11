import { Request, Response } from "express"
import { connection } from "../connection"
import { selectAllProducts } from "../data/selectAllProducts"
import { getAllProducts } from "./getAllProducts"

export const createPurchaseRecord = async (req: Request, res: Response):Promise<void> => {
  try {
    const { userId, productId, quantity }: { userId: string, productId: string, quantity: number} = req.body
    const id: string = Math.floor(Math.random() * 256).toString()
    let totalPrice: number = 0

    const product = await connection("labecommerce_products")
      .select("id", "price")

    product.forEach((prod) =>{
      if(prod.id === productId){
        totalPrice = prod.price * quantity
      }
    })

    const result = await connection("labecommerce_purchases")
      .insert({
        id,
        user_id: userId,
        product_id: productId,
        quantity,
        total_price: totalPrice
      })
    
      res.send({message: `Valor total: ${totalPrice}`})

  } catch (error: any) {
    res.status(500).send(error.message || error.sqlMessage)
  }
}

