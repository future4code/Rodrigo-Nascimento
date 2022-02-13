import { Request, Response } from "express"
import { connection } from "../connection"

export const createPurchaseRecord = async (req: Request, res: Response): Promise<void> => {
  let codeError = 400
  try {
    const { userId, productId, quantity }: { userId: string, productId: string, quantity: number } = req.body
    const id: string = Math.floor(Math.random() * 256).toString()
    let totalPrice: number = 0

    if (!userId || !productId || !quantity) {
      throw new Error("Preencha todos os campos")
      codeError = 401
    }

    if (quantity <= 0) {
      throw new Error("Informe uma quantidade maior que 0")
      codeError = 401
    }

    const product = await connection("labecommerce_products")
      .select("id", "price")

    product.forEach((prod) => {
      if (prod.id === productId) {
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

    res.send({ message: `Registro de compra cadastrado` })

  } catch (error: any) {
    res.status(codeError).send(error.message || error.sqlMessage)
  }
}

