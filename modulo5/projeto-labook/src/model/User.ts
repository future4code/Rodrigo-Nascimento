import { PostType } from "./Post"

export class User {
  constructor (
    private id: string,
    private name: string,
    private email: string,
    private password: string
  ){}
}

export type FindUserResponse = {
  id: string,
  name: string,
  email: string,
  password: string
}[]

export type FindFriendResponse = {
  followerId: string,
  followedId: string
}[]

export type FeedResponse = {
  id: string,
  description: string,
  createdAt: string,
  imgUrl: string,
  type: PostType,
  creatorId: string,
  creatorName: string
}[]