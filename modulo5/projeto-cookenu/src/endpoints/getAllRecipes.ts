import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { Authenticator } from "../services/Authenticator";

export const getAllRecipes = async (req: Request, res: Response): Promise<void> => {
  let codeError = 400
  try {
    const token = req.headers.authorization

    if(!token){
      codeError = 422
      throw new Error("Informe um token.")
    }

    const authenticator = new Authenticator()
    const tokenData = authenticator.getTokenData(token)

    const user = new UserDatabase()
    const userFeed = await user.userFeed(tokenData.id)

    res.status(200).send({recipes: userFeed})

  } catch (error: any) {
    res.status(codeError).send(error.message || error.sqlMessage)
  }
}