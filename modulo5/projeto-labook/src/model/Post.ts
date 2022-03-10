export class Post {
  constructor(
    private id: string,
    private description: string,
    private createdAt: string,
    private imgUrl: string,
    private type: PostType,
    private UserId: string,
  ){}
}

export enum PostType {
  NORMAL = "NORMAL",
  EVENTO = "EVENTO"
}