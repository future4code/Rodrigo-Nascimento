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
      if(error.message) return res.status(400).send(error.message)
      res.status(400).send("Error no createPost")
    }
  }
}