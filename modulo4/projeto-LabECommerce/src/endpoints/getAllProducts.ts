import { Request, Response } from "express"
import { connection } from "../connection"
import { selectAllProducts } from "../data/selectAllProducts"

export const getAllProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    const search = req.query.search as string
    const order = req.query.order as string
    let response

    if (search === undefined && order === undefined) {
      response = await selectAllProducts()
    } else if (search === undefined) {
      response = await connection("labecommerce_products")
        .orderBy("name", order as string)
    } else if (search) {
      response = await connection("labecommerce_products")
        .where("name", "LIKE", `%${search}%`)
    }

    res.send(response)

  } catch (error: any) {
    res.status(500).send(error.message || error.sqlMessage)
  }
}