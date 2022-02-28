import connection from "../connection";
import {Request, Response} from "express"
import { getData } from "../services/getData";


export const getUserProfile = async (req: Request, res: Response): Promise<void> => {
  try {
    const token = req.headers.authorization as string

    const authenticationData = getData(token)

    console.log(authenticationData.id, "auth")

    const result = await connection("introducao_autenticacao").where({id: authenticationData.id})

    res.send({result})
    
  } catch (error: any) {
    res.send(error.message || error.sqlMessage)
    
  }

}
