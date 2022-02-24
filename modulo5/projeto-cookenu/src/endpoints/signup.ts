import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { User, UserRole } from "../entities/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/idGenerator";


export const signup = async (req: Request, res: Response): Promise<any> => {
  try {
    const { name, email, password, role } = req.body

    if(!name || !email || !password || !role){
      res.status(422).send("Insira as informações de 'name', 'email', 'password' e 'role'")
    }

    const userDatabase = new UserDatabase()
    const user = await userDatabase.findUserByEmail(email)

    if(user){
      res.status(409).send("Usuário já cadastrado")
    }

    const idGenerator = new IdGenerator()
    const id = idGenerator.generate()

    const hashManager = new HashManager()
    const hashPassword = await hashManager.hash(password)

    const newUser = new User(id, name, hashPassword, email, role)
    await userDatabase.createUser(newUser)

    const authenticator = new Authenticator()
    const token = authenticator.generate({id, role})

    res.status(200).send({message: "Usuário criado com sucesso", token})

  } catch (error: any) {
    res.status(400).send(error.message || error.sqlMessage)
  }
}