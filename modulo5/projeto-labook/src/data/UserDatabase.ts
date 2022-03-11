import { User } from "../model/User";
import { BaseDatabase } from "./BaseDatabase";

type FindUserResponse = {
  id: string,
  name: string,
  email: string,
  password: string
}[]

export class UserDatabase extends BaseDatabase {
  protected TABLE_USERS = "labook_users"
  protected TABLE_FOLLOWERS = "labook_followers"

  createUser = async (user: User) => {
    try {
      const newUser = await BaseDatabase.connection(this.TABLE_USERS)
        .insert(user)

    } catch (error: any) {
      throw new Error(error.message || error.sqlMessage)
    }
  }

  findUserByEmail = async (email: string) => {
    try {
      const result: FindUserResponse = await BaseDatabase.connection(this.TABLE_USERS)
        .select()
        .where({ email })

      return result[0]

    } catch (error: any) {
      throw new Error(error.message || error.sqlMessage)
    }
  }

  findUserById = async (id: string) => {
    try {
      const result: FindUserResponse = await BaseDatabase.connection(this.TABLE_USERS)
        .select()
        .where({ id })

      return result[0]
      
    } catch (error: any) {
      throw new Error(error.message || error.sqlMessage)
    }
  }

  followUser = async (follower: string, followed: string) => {
    try {
      const result = await BaseDatabase.connection(this.TABLE_FOLLOWERS)
        .insert({
          follower_id: follower,
          followed_id: followed
        })
    } catch (error: any) {
      throw new Error(error.message || error.sqlMessage)
    }
  }

  findUserFriends = async (userId: string, friendId: string) => {
    try {
      const result = await BaseDatabase.connection(this.TABLE_FOLLOWERS)
        .select()
        .where({
          follower_id: userId,
          followed_id: friendId
        })
        
      return result[0]
      
    } catch (error: any) {
      throw new Error(error.message || error.sqlMessage)      
    }
  }
}