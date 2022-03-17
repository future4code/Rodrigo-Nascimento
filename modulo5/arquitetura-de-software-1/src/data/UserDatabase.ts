import { user } from "../types/user";
import { BaseDatabase } from "./BaseDatabase";


export class UserDatabase extends BaseDatabase {
  createUser = async (user: user): Promise<void> => {
    try {
      const newUser = await BaseDatabase.connection("User_Arq")
        .insert({
          id: user.id,
          name: user.name,
          email: user.email,
          password: user.password,
          role: user.role
        })
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message)
    }
  }
  getUser = async (email: string, password: string): Promise<any> => {
    try {
      const result = await BaseDatabase.connection("User_Arq")
        .where({ email, password })
      
      if(!result[0]){
        throw new Error("Usuário não encontrado")
      } else {
        return result[0]
      }

    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message)
    }
  }
}