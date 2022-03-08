import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { UserRole } from "../types/user";

const userDB = new UserDatabase()
const idGenerator = new IdGenerator()
const authenticator = new Authenticator()

export class UserBusiness {
  signup = async (name: string, email: string, password: string, role: UserRole) => {
    if (!name || !email || !password || !role) {
      throw new Error("Preencha os campos de 'name', 'email', 'password' e 'role'")
    }
    const id: string = idGenerator.generate()

    const newUser = await userDB.createUser({id, name, email, password, role})

    const token: string = authenticator.generate({id, role: role})

    return token
  }

  login = async (email: string, password: string) => {

    const user = await userDB.getUser(email, password)

    const token = authenticator.generate({id: user.id, role: user.role})

    return token


  }
}