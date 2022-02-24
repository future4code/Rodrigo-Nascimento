import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";

export const getUserProfile = async (req: Request, res: Response) => {
  let codeError = 400
  try {

    const token = req.headers.authorization

    if(!token){
      codeError = 422
      throw new Error("Informe um token válido")
    }

    const authenticator = new Authenticator()
    const tokenData = authenticator.getTokenData(token)

    const userDatabase = new UserDatabase()
    const user = await userDatabase.getUserById(tokenData.id)

    res.status(200).send(user)
    
  } catch (error: any) {
    res.status(codeError).send(error.message || error.sqlMessage) 
  }
}