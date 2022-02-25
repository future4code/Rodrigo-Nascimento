import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export const followUser = async (req: Request, res: Response) => {
  let codeError = 400
  try {
    const token = req.headers.authorization
    const { userId } = req.body

    if (!token || !userId) {
      codeError = 422
      throw new Error("Informe um token e um id")
    }

    const authenticator = new Authenticator()
    const tokenData = authenticator.getTokenData(token)

    const idGenerator = new IdGenerator()
    const id = idGenerator.generate()

    const user = new UserDatabase()
    const followUser = await user.followUserById(id, tokenData.id, userId)

    res.status(201).send({ message: "Seguindo com sucesso." })

  } catch (error: any) {
    res.send(codeError).status(error.message || error.sqlMessage)
  }
}