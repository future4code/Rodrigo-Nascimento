import { Request, Response } from "express"
import { UserDatabase } from "../data/UserDatabase"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"

export const login = async (req: Request, res: Response) => {
  let codeError = 400
  try {

    const { email, password } = req.body

    if (!email || !password) {
      codeError = 422
      throw new Error("Informe um email e uma senha")
    }

    const userDatabase = new UserDatabase()
    const user = await userDatabase.findUserByEmail(email)

    if (!user) {
      codeError = 409
      throw new Error("Usuário não cadastrado")
    }

    const hashManager = new HashManager()
    const passwordIsTrue = await hashManager.compare(password, user.getPassword())

    if (!passwordIsTrue) {
      codeError = 422
      throw new Error("Senha incorreta")
    }

    const authenticator = new Authenticator()
    const token = authenticator.generate({ id: user.getId(), role: user.getRole() })

    res.status(200).send({ token })

  } catch (error: any) {
    res.status(codeError).send(error.message || error.sqlMessage)
  }
}