import { PostDatabase } from "../data/PostDatabase";
import { Post, PostType, CreatePostInputDTO } from "../model/Post";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export class PostBusiness {
  constructor(
    private postDatabase: PostDatabase,
    private idGenerator: IdGenerator,
    private authenticator: Authenticator
  ) { }

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
    if (!type) {
      throw new Error("É necessário informar um 'type'")
    }

    const inputType = type.toUpperCase()

    if (inputType !== "NORMAL" && inputType !== "EVENTO") {
      throw new Error("É necessário passar um 'type' como 'normal' ou 'evento'")
    }

    const result = await this.postDatabase.getAllPostsByType(type)

    return result
  }

  likePost = async (id: string, token: string) => {
    const toggle = "1"

    if (id === ":id") {
      throw new Error("Informe um 'id' válido")
    }

    if (!id || !token) {
      throw new Error("Informe um 'id' e um 'token'")
    }

    const findPostById = await this.getPostById(id)

    if (!findPostById) {
      throw new Error("Post não encontrado")
    }

    const tokenData = this.authenticator.getTokenData(token)

    const registeredLike = await this.postDatabase.getPostByLikes(id, tokenData.id)

    if (!registeredLike) {
      const result = await this.postDatabase.createLike({postId: id, userId: tokenData.id, toggle})
    } else if (registeredLike.toggle === "1") {
      throw new Error("Post já curtido pelo usuário")
    } else {
      const result = await this.postDatabase.toggleLikes({postId: id, userId: tokenData.id, toggle})
    }
  }

  dislikePost = async (id: string, token: string) => {
    const toggle = "-1"

    if (id === ":id") {
      throw new Error("Informe um 'id' válido")
    }

    if (!id || !token) {
      throw new Error("Informe um 'id' e um 'token'")
    }

    const findPostById = await this.getPostById(id)

    if (!findPostById) {
      throw new Error("Post não encontrado")
    }

    const tokenData = this.authenticator.getTokenData(token)

    const registeredLike = await this.postDatabase.getPostByLikes(id, tokenData.id)

    if (!registeredLike) {
      const result = await this.postDatabase.createLike({postId: id, userId: tokenData.id, toggle})
    } else if (registeredLike.toggle === "-1") {
      throw new Error("Esse post já está descurtido")
    } else {
      const result = await this.postDatabase.toggleLikes({postId: id, userId: tokenData.id, toggle})
    }
  }

  createComment = async (id: string, comment: string, token: string) => {
    const postId = id

    if(id === ":id"){
      throw new Error("Informe um 'id' válido")
    }

    if(!id || !comment || !token){
      throw new Error("Informe um 'id', um 'comment' e um 'token'")
    }

    const findPostById = await this.getPostById(id)

    if(!findPostById){
      throw new Error("Post não encontrado")
    }

    const tokenData = this.authenticator.getTokenData(token)

    if(!tokenData){
      throw new Error("Informe um 'token' válido")
    }

    const idGenerator = this.idGenerator.generate()

    const result = await this.postDatabase.createComment({id: idGenerator ,postId, comment, userId: tokenData.id})
  }
}