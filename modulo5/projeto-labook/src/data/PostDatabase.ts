import { Post, PostType, FindPostResponse, Like, Comment, FindLikeResponse } from "../model/Post"
import { BaseDatabase } from "./BaseDatabase"

export class PostDatabase extends BaseDatabase {
  protected TABLE_POSTS = "labook_posts"
  protected TABLE_LIKES = "labook_likes"
  protected TABLE_COMMENTS = "labook_comments"

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
      const result: FindLikeResponse = await BaseDatabase.connection(this.TABLE_LIKES)
        .select()
        .where({
          post_id: id,
          user_id: userId
        })

      return result[0]
      
    } catch (error: any) {
      throw new Error(error.message || error.sqlMessage)  
    }
  }

  createLike = async (like: Like) => {
    try {
      const result = await BaseDatabase.connection(this.TABLE_LIKES)
        .insert({
          toggle_like: like.toggle,
          post_id: like.postId,
          user_id: like.userId
        })
      
    } catch (error: any){
      throw new Error(error.message || error.sqlMessage)  
    }
  }

  toggleLikes = async (like: Like) => {
    try {
      const result = await BaseDatabase.connection(this.TABLE_LIKES)
        .update({
          toggle_like: like.toggle
        })
        .where({
          post_id: like.postId,
          user_id: like.userId
        })
            
    } catch (error: any){
      throw new Error(error.message || error.sqlMessage)  
    }
  }

  createComment = async (comment: Comment) => {
    try {
      const result = await BaseDatabase.connection(this.TABLE_COMMENTS)
        .insert({
          id: comment.id,
          post_id: comment.postId,
          comment,
          user_id: comment.userId
        })
      
    } catch (error: any) {
      throw new Error(error.message || error.sqlMessage)      
    }
  }
}