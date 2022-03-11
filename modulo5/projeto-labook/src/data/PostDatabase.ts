import { Post, PostType } from "../model/Post"
import { BaseDatabase } from "./BaseDatabase"

type FindPostResponse = {
  id: string,
  description: string,
  createdAt: string,
  imgUrl: string,
  type: PostType,
  userId: string
}[]

export class PostDatabase extends BaseDatabase {
  protected TABLE_NAME = "labook_posts"

  createPost = async (post: Post) => {
    try {
      const newPost = await BaseDatabase.connection(this.TABLE_NAME)
        .insert({
          id: post.getId(),
          description: post.getDescription(),
          created_at: post.getCreatedAt(),
          img_url: post.getImgUrl(),
          type: post.getType(),
          user_id: post.getUserId()
        })
      
    } catch (error: any) {
      throw new Error(error.message || error.sqlMessage)
    }
  }

  findPostById = async (id: string) => {
    try {
      const result: FindPostResponse = await BaseDatabase.connection(this.TABLE_NAME)
        .select("description", "created_at as createdAt", "img_url as imgUrl", "type", "user_id as userId")
        .where({ id })

      return result[0]
      
    } catch (error: any) {
      throw new Error(error.message || error.sqlMessage) 
    }
  }
}