export class Post {
  constructor(
    private id: string,
    private description: string,
    private createdAt: string,
    private imgUrl: string,
    private type: PostType,
    private userId: string,
  ){}
  getId(){
    return this.id
  }
  getDescription(){
    return this.description
  }
  getCreatedAt(){
    return this.createdAt
  }
  getImgUrl(){
    return this.imgUrl
  }
  getType(){
    return this.type
  }
  getUserId(){
    return this.userId
  }
}

export enum PostType {
  NORMAL = "NORMAL",
  EVENTO = "EVENTO"
}

export type CreatePostInputDTO = {
  description: string,
  imgUrl: string,
  type: PostType,
}

export type FindPostResponse = {
  id: string,
  description: string,
  createdAt: string,
  imgUrl: string,
  type: PostType,
  userId: string
}[]

export type Like = {
  postId: string,
  userId: string,
  toggle: string
}

export type FindLikeResponse = {
  postId: string,
  userId: string,
  toggle: string
}[]

export type Comment = {
  id: string,
  postId: string,
  comment: string,
  userId: string
}