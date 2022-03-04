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
        SELECT cookenu_recipes.id AS "id", 
        cookenu_recipes.title AS "title", 
        cookenu_recipes.description AS "description",
        cookenu_recipes.created_at AS "createdAt",
        cookenu_recipes.user_id AS "userId",
        cookenu_users.name AS "userName"
        FROM cookenu_recipes 
        INNER JOIN cookenu_users
        INNER JOIN cookenu_followers
        ON (followed_id = cookenu_recipes.user_id)
        AND (followed_id = cookenu_users.id)
        WHERE follower_id = "${userId}"
        ORDER BY "createdAt" DESC`)
      return user[0]

    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message)
    }
  }

  public async deleteUser(id: string): Promise<void> {
    try {
      const follow = await BaseDatabase.connection("cookenu_followers")
        .where({ follower_id: id })
        .del()

      const followed = await BaseDatabase.connection("cookenu_followers")
        .where({ followed_id: id })
        .del()

      const recipe = await BaseDatabase.connection("cookenu_recipes")
        .where({ user_id: id })
        .del()

      const user = await BaseDatabase.connection("cookenu_users")
        .where({ id })
        .del()

    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message)
    }
  }

  public async newPassword(password: string, email: string): Promise<void> {
    try {
      const user = await BaseDatabase.connection("cookenu_users")
        .where({ email })
        .update({ password })

    } catch (error: any) {
      throw new Error(error.sqlMessage || error.message)
    }
  }
}