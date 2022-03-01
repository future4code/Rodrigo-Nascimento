import { Request, Response } from "express"
import { UserDatabase } from "../data/UserDatabase"
import { User } from "../entities/User"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

export const signup = async (req: Request, res: Response): Promise<void> => {
  let codeError = 400
  try {
    const { name, email, password, role } = req.body

    if (!name || !email || !password || !role) {
      codeError = 422
      throw new Error("Insira as informações de 'name', 'email', 'password' e 'role' corretamente.")
    }

    if (!email.includes("@")) {
      codeError = 422
      throw new Error("Informe um email válido.")
    }

    if (password.length < 6) {
      codeError = 422
      throw new Error("Password deve ter mais que seis caracteres.")
    }

    const userDatabase = new UserDatabase()
    const user = await userDatabase.findUserByEmail(email)

    if (user) {
      codeError = 409
      throw new Error("Usuário já cadastrado")
    }

    const idGenerator = new IdGenerator()
    const id = idGenerator.generate()

    const hashManager = new HashManager()
    const hashPassword = await hashManager.hash(password)

    const newUser = new User(id, name, hashPassword, email, role)
    await userDatabase.createUser(newUser)

    const authenticator = new Authenticator()
    const token = authenticator.generate({ id, role })

    res.status(200).send({ message: "Usuário criado com sucesso", token })

  } catch (error: any) {
    res.status(codeError).send(error.message || error.sqlMessage)
  }
}