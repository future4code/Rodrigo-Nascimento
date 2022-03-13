import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";

export type SignupInputDTO = {
  name: string,
  email: string,
  password: string
}

export type LoginInputDTO = {
  email: string,
  password: string
}

export class UserController {
  constructor(
    private userBusiness: UserBusiness
  ) { }

  signup = async (req: Request, res: Response) => {
    const { name, email, password } = req.body

    const input: SignupInputDTO = {
      name,
      email,
      password
    }
    try {
      const token = await this.userBusiness.signup(input)

      res.send({ message: "Usuário criado com sucesso!", token })
    } catch (error: any) {
      if (error.message) return res.status(400).send(error.message)
      res.status(400).send("Erro no signup")
    }
  }

  login = async (req: Request, res: Response) => {
    const { email, password } = req.body

    const input: LoginInputDTO = {
      email,
      password
    }

    try {
      const token = await this.userBusiness.login(input)

      res.send({ token })

    } catch (error: any) {
      if (error.message) return res.status(400).send(error.message)
      res.status(400).send("Erro no login")
    }
  }

  followUser = async (req: Request, res: Response) => {
    const { id } = req.params

    const token = req.headers.authorization as string

    try {
      const result = await this.userBusiness.followUser(id, token)

      res.send({message: "Amizade criada com sucesso!"})
      
    } catch (error: any) {
      if(error.message === "jwt expired") return res.status(400).send("Token expirou") 
      if(error.message) return res.status(400).send(error.message)
      res.status(400).send("Erro no followUser")
    }
  }

  unfollowUser = async (req: Request, res: Response) => {
    const { id } = req.params

    const token = req.headers.authorization as string

    try {
      const result = await this.userBusiness.unfollowUser(id, token)

      res.send({message: "Amizade desfeita com sucesso!"})
      
    } catch (error: any) {
      if(error.message === "jwt expired") return res.status(400).send("Token expirou") 
      if(error.message === "invalid token") return res.status(400).send("Token inválido")
      if(error.message) return res.status(400).send(error.message)
      res.status(400).send("Erro no unfollowUser")
    }
  }

  feed = async (req: Request, res: Response) => {
    const token = req.headers.authorization as string
    const page = req.query.page as string

    try {
      const result = await this.userBusiness.feed(token, page)

      res.send({ result })
      
    } catch (error: any) {
      if(error.message === "jwt expired") return res.status(400).send("Token expirou") 
      if(error.message === "invalid token") return res.status(400).send("Token inválido")    
      if(error.message) return res.status(400).send(error.message)
      res.status(400).send("Erro no unfollowUser")
    }
  }
}