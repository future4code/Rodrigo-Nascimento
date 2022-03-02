import { Request, Response } from "express"
import { UserDatabase } from "../data/UserDatabase"
import { Authenticator } from "../services/Authenticator"

export const deleteUser = async (req: Request, res: Response): Promise<void> => {
  let codeError = 400
  try {
    const token = req.headers.authorization
    const { id } = req.params

    if (!id) {
      codeError = 422
      throw new Error("Informe um 'id'")
    }

    if (!token) {
      codeError = 422
      throw new Error("Informe um token válido")
    }

    const authenticator = new Authenticator()
    const tokenData = authenticator.getTokenData(token)

    if (tokenData.role !== "ADMIN") {
      codeError = 422
      throw new Error("Só administradores podem fazer isso")
    }

    const userDatabase = new UserDatabase()
    const user = await userDatabase.findUserById(id)

    if (user.length === 0) {
      codeError = 409
      throw new Error("Id do usuário não encontrado")
    }

    const deleteUser = await userDatabase.deleteUser(id)

    res.status(200).send("Usuário deletado")

  } catch (error: any) {
    res.status(codeError).send(error.message || error.sqlMessage)
  }
}