import {Request, Response} from "express"
import { connection } from "../connection"
import { Product } from "../types/product"

export const createProduct = async (req: Request, res: Response): Promise<void> => {
  let codeError = 400
  try {
    const { name, price, imageUrl }: Product = req.body
    const id: string = Math.floor(Math.random() * 256).toString()
    const re = "https://"
    const index = imageUrl.search(re)

    console.log(index)

    if(!name || !price || !imageUrl){
      throw new Error("Preencha todos os campos")
      codeError = 401
    }

    if(price <= 0){
      throw new Error("Informe um valor de 'price' válido")
      codeError = 401
    }

    if(index === -1){
      throw new Error("A url da imagem deve iniciar com 'https://' para ser válida")
      codeError = 401
    }

    const result = await connection("labecommerce_products")
      .insert({
        id,
        name,
        price,
        image_url: imageUrl
      })

    res.send("Produto cadastrado.")
    
  } catch (error: any) {
    res.status(codeError).send(error.message || error.sqlMessage)
  }
}