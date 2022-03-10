import { User } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

type FindUserResponse = {
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

    } catch (error: any) {
      throw new Error(error.message || error.sqlMessage)
    }
  }

  findUserByEmail = async (email: string) => {
    try {
      const result: FindUserResponse = await BaseDatabase.connection(this.TABLE_NAME)
        .select()
        .where({ email })

      return result[0]

    } catch (error: any) {
      throw new Error(error.message || error.sqlMessage)
    }
  }
}