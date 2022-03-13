import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import { CreatePostInputDTO, PostType } from "../model/Post";

export class PostController {
  constructor(
    private postBusiness: PostBusiness
  ){}
  

  createPost = async(req: Request, res: Response) => {
    const { description, imgUrl, type } = req.body

    const token = req.headers.authorization as string

    const input: CreatePostInputDTO = {
      description,
      imgUrl,
      type
    }

    try {
      const post = await this.postBusiness.createPost(input, token)

      res.send({message: "Post criado com sucesso!"})
      
    } catch (error: any) {
      if(error.message === "jwt expired") return res.status(400).send("Token expirou") 
      if(error.message === "invalid token" || error.message === "jwt malformed") return res.status(400).send("Token inválido")
      if(error.message) return res.status(400).send(error.message)
      res.status(400).send("Erro no createPost")
    }
  }

  getPostById = async(req: Request, res: Response) => {
    const { id } = req.params

    try {
      const post = await this.postBusiness.getPostById(id)

      res.send(post)
      
    } catch (error: any) {
      if(error.message) return res.status(400).send(error.message)
      res.status(400).send("Erro no getPostById")
    }
  }

  getPostByType = async (req: Request, res: Response) => {
    const type = req.query.type as string

    try {
      const result = await this.postBusiness.getPostByType(type)

      res.send({result})
    } catch (error: any) {
      if(error.message) return res.status(400).send(error.message)
      res.status(400).send("Erro no getPostById")
    }
  }

  likePost = async (req: Request, res: Response) => {
    const { id } = req.params
    const token = req.headers.authorization as string

    try {
      const result = await this.postBusiness.likePost(id, token)

      res.send({message: "Curtido"})
      
    } catch (error: any) {
      if(error.message === "jwt expired") return res.status(400).send("Token expirou") 
      if(error.message === "invalid token" || error.message === "jwt malformed") return res.status(400).send("Token inválido")    
      if(error.message) return res.status(400).send(error.message)
    }
  }

  dislikePost = async (req: Request, res: Response) => {
    const { id } = req.params
    const token = req.headers.authorization as string

    try {
      const result = await this.postBusiness.dislikePost(id, token)

      res.send({message: "Descurtido"})
      
    } catch (error: any) {
      if(error.message === "jwt expired") return res.status(400).send("Token expirou") 
      if(error.message === "invalid token" || error.message === "jwt malformed") return res.status(400).send("Token inválido")    
      if(error.message) return res.status(400).send(error.message)
    }
  }

  createComment = async (req: Request, res: Response) => {
    const { id } = req.params
    const { comment } = req.body
    const token = req.headers.authorization as string

    try {
      const result = await this.postBusiness.createComment(id, comment, token)

      res.send({message: "Comentário criado com sucesso!"})
      
    } catch (error: any) {
      if(error.message === "jwt expired") return res.status(400).send("Token expirou") 
      if(error.message === "invalid token" || error.message === "jwt malformed") return res.status(400).send("Token inválido")    
      if(error.message) return res.status(400).send(error.message)
    }
  }

}