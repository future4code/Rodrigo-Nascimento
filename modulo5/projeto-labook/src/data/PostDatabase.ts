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
  protected TABLE_POSTS = "labook_posts"
  protected TABLE_LIKES = "labook_likes"

  createPost = async (post: Post) => {
    try {
      const newPost = await BaseDatabase.connection(this.TABLE_POSTS)
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
      const result: FindPostResponse = await BaseDatabase.connection(this.TABLE_POSTS)
        .select("description", "created_at as createdAt", "img_url as imgUrl", "type", "user_id as userId")
        .where({ id })

      return result[0]
      
    } catch (error: any) {
      throw new Error(error.message || error.sqlMessage) 
    }
  }

  getAllPostsByType = async (type: string) => {
    try {
      const result: FindPostResponse = await BaseDatabase.connection(this.TABLE_POSTS)
        .select()
        .orderBy("created_at", "DESC")
        .where({type: type})
      
      return result
    } catch (error: any) {
      throw new Error(error.message || error.sqlMessage) 
    }
  }

  getPostByLikes = async (id: string, userId: string) => {
    try {
      const result = await BaseDatabase.connection(this.TABLE_LIKES)
        .select()

      return result[0]
      
    } catch (error: any) {
      throw new Error(error.message || error.sqlMessage)  
    }
  }

  likePost = async (id: string, userId: string) => {
    try {
      const result = await BaseDatabase.connection(this.TABLE_LIKES)
        .insert({
          post_id: id,
          user_id: userId,
          toggle_like: "1"
        })
      
    } catch (error: any){
      throw new Error(error.message || error.sqlMessage)  
    }
  }
}