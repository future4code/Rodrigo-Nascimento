import { Request, Response } from "express";

export type SignupInputDTO = {
  name: string,
  email: string,
  password: string
}

export class UserController {
  signup = async (req: Request, res: Response) => {
    const { name, email, password } = req.body

    const input: SignupInputDTO = {
      name,
      email,
      password
    }
    try {
      res.send("sucesso")
    } catch (error: any) {
      res.status(400).send("Error no signup")
    }
  }
}