import { Request, Response } from "express"
import { connection } from "../connection"
import { User } from "../types/user"

export const createUser = async (req: Request, res: Response): Promise<void> => {
  let codeError = 400
  try {
    const { name, email, password }: User = req.body
    const id: string = Math.floor(Math.random() * 256).toString()

    if (!name || !email || !password) {
      codeError = 422
      throw new Error("Preencha todos os campos")
    }

    const result = await connection("labecommerce_users")
      .insert({
        id,
        name,
        email,
        password
      })

    res.status(201).send("Pessoa cadastrada.")

  } catch (error: any) {
    res.status(codeError).send(error.message || error.sqlMessage)
  }
}

