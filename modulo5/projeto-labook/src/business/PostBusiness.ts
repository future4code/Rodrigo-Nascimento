import { threadId } from "worker_threads";
import { PostDatabase } from "../data/PostDatabase";
import { Post, PostType, CreatePostInputDTO } from "../model/Post";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export class PostBusiness {
  constructor(
    private postDatabase: PostDatabase,
    private idGenerator: IdGenerator,
    private authenticator: Authenticator
  ) {}

  createPost = async (input: CreatePostInputDTO, token: string) => {
    const { description, imgUrl, type } = input

    if (!description || !imgUrl || !type) {
      throw new Error("É necessário informar uma 'description', 'imgUrl' e um 'type'")
    }

    if (type !== PostType.NORMAL && type !== PostType.EVENTO) {
      throw new Error("Escolha um 'type' válido ('NORMAL' OU 'EVENTO')")
    }

    const id = this.idGenerator.generate()

    const date = new Date().toLocaleDateString("pt-BR")

    const tokenData = this.authenticator.getTokenData(token)

    const post = new Post(id, description, date, imgUrl, type, tokenData.id)

    const createPost = await this.postDatabase.createPost(post)
  }
}