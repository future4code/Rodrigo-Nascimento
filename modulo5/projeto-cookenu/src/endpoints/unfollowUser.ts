import { Request, Response } from "express"
import { UserDatabase } from "../data/UserDatabase"
import { Authenticator } from "../services/Authenticator"


export const unfollowUser = async (req: Request, res: Response): Promise<void> => {
  let codeError = 400
  try {
    const token = req.headers.authorization
    const { id } = req.body

    if(!token || !id){
      codeError = 422
      throw new Error("É necessário passar o token e o id.")
    }

    const authenticator = new Authenticator()
    const tokenData = authenticator.getTokenData(token)

    const user = new UserDatabase()
    const unfollow = await user.unfollowUserById(tokenData.id, id)

    res.status(200).send("Unfollow feito com sucesso.")
    
  } catch (error: any) {
    res.status(codeError).send(error.message || error.sqlMessage)
  }
}