import { User } from "../entities/User";
import { BaseDatabase } from "./BaseDatabase";

export class UserDatabase extends BaseDatabase {

  public async createUser(user: User) {
    try {
      const newUser = await BaseDatabase.connection("cookenu_users")
        .insert({
          id: user.getId(),
          name: user.getName(),
          email: user.getEmail(),
          password: user.getPassword(),
          role: user.getRole()
        })
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message)
    }
  }

  public async findUserByEmail(email: string): Promise<User> {
    try {
      const user = await BaseDatabase.connection("cookenu_users")
        .where({ email })
      return user[0] && User.toUserModel(user[0])

    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message)
    }
  }

  public async findUserById(id: string): Promise<string[]> {
    try {
      const user = await BaseDatabase.connection("cookenu_users")
        .select("id", "name", "email")
        .where({ id })
      return user

    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message)
    }
  }

  public async followUserById(id: string, followerId: string, followedId: string): Promise<void> {
    try {
      const user = await BaseDatabase.connection("cookenu_followers")
        .insert({ id, follower_id: followerId, followed_id: followedId })

    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message)
    }
  }

  public async unfollowUserById(userId: string, userToUnfollow: string): Promise<void> {
    try {
      const user = await BaseDatabase.connection("cookenu_followers")
        .where({ follower_id: userId, followed_id: userToUnfollow })
        .delete()
    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message)
    }
  }

  public async userFeed(userId: string): Promise<string[]> {
    try {
      const user = await BaseDatabase.connection.raw(`
        select cookenu_recipes.id as "id", 
        cookenu_recipes.title as "title", 
        cookenu_recipes.description as "description",
        cookenu_recipes.created_at as "createdAt",
        cookenu_recipes.user_id as "userId",
        cookenu_users.name as "userName"
        from cookenu_recipes 
        inner join cookenu_users
        inner join cookenu_followers
        on (followed_id = cookenu_recipes.user_id)
        and (followed_id = cookenu_users.id)
        where follower_id = "${userId}"`)
      return user[0]

    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message)
    }
  }
}