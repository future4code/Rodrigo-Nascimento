import { Request, Response } from "express"
import { connection } from "../data/connection"
import selectAllUsers from "./selectAllUsers"


export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    
    const users = await selectAllUsers()
    const name = req.query.name
    const type = req.query.type
    let order = req.query.order as string
    let page = Number(req.query.page)

    if(page < 1 || isNaN(page)){
      page = 1
    }

    let size = 5
    let offset = size * (page - 1)
  
    if(order === undefined){
      order = "email"
    }
 
    const result = await connection("aula48_exercicio")
      .select()
      // 1.
      // .where("name", "like", `%${name}%`) A
      // .where("type", "like", `%${type}%`) B
      .where("type", "like", `%${type}%`)
      .orWhere("name", "like", `%${name}%`)
      .orderBy(`${order}`, "ASC")
      .limit(size)
      .offset(offset)
             
    if (!users.length) {
      res.statusCode = 404
      throw new Error("No recipes found")
    }

    res.status(200).send(result)

  } catch (error: any) {
    console.log(error)
    res.send(error.message || error.sqlMessage)
  }
}
