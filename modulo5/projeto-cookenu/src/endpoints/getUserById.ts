import { Request, Response } from "express"
import { UserDatabase } from "../data/UserDatabase"
import { Authenticator } from "../services/Authenticator"

export const getUserById = async (req: Request, res: Response): Promise<void> => {
  let codeError = 400
  try {
    const { id } = req.params
    const token = req.headers.authorization

    if (!id) {
      codeError = 422
      throw new Error("Informe um id válido.")
    }

    if (!token) {
      codeError = 422
      throw new Error("Informe um token válido.")
    }

    const authenticator = new Authenticator()
    const tokenData = authenticator.getTokenData(token)

    const userDatabase = new UserDatabase()
    const user = await userDatabase.findUserById(id)

    res.status(200).send(user)

  } catch (error: any) {
    res.status(codeError).send(error.message || error.sqlMessage)
  }
}