import { User } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

type FindUserByEmailResponse = {
  id: string,
  name: string,
  email: string,
  password: string
}[]

export class UserDatabase extends BaseDatabase {
  protected TABLE_NAME = "labook_users"

  createUser = async (user: User) => {
    try {
      const newUser = await BaseDatabase.connection(this.TABLE_NAME)
        .insert(user)
      
      console.log(newUser)
      
    } catch (error: any) {
      throw new Error(error.message || error.sqlMessage)
    }
  }

  findUserByEmail = async (email: string) => {
    try {
      const result: FindUserByEmailResponse = await BaseDatabase.connection(this.TABLE_NAME)
        .select()
        .where({ email })
      
      return result

    } catch (error: any) {
      throw new Error(error.message || error.sqlMessage)
    }
  }
}