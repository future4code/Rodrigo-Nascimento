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
      throw new Error("Escolha um 'type' válido ('NORMAL' ou 'EVENTO')")
    }

    const id = this.idGenerator.generate()

    const date = new Date().toLocaleDateString("pt-BR")

    const tokenData = this.authenticator.getTokenData(token)

    const post = new Post(id, description, date, imgUrl, type, tokenData.id)

    const createPost = await this.postDatabase.createPost(post)
  }

  getPostById = async (id: string) => {
    const postId = id

    if (postId === ":id") {
      throw new Error("É necessário informar um 'id'")
    }

    const result = await this.postDatabase.findPostById(postId)

    if (!result) {
      throw new Error("Post não encontrado")
    }

    return result
  }

  getPostByType = async (type: string) => {
    if(!type) {
      throw new Error("É necessário informar um 'type'")
    }

    const inputType = type.toUpperCase()

    if(inputType !== "NORMAL" && inputType !== "EVENTO"){
      throw new Error("É necessário passar um 'type' como 'normal' ou 'evento'")
    }

    const result = await this.postDatabase.getAllPostsByType(type)

    return result
  }
}