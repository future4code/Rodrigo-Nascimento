import {Request, Response} from "express"
import { connection } from "../connection"
import { Product } from "../types/product"

export const createProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, price, imageUrl }: Product = req.body
    const id: string = Math.floor(Math.random() * 256).toString()

    const result = await connection("labecommerce_products")
      .insert({
        id,
        name,
        price,
        image_url: imageUrl
      })

    res.send("Produto cadastrado.")
    
  } catch (error: any) {
    res.status(500).send(error.message || error.sqlMessage)
  }
}