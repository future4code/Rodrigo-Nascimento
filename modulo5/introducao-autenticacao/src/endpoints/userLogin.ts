import {Request, Response} from "express"
import connection from "../connection"
import { generatedId } from "../services/generateId"
import { generateToken } from "../services/generateToken"

export const userLogin = async (req: Request, res: Response): Promise<void> => {
  try {

  const {email, password}: {email: string, password: string} = req.body

  if(!email || !email.includes("@")) throw new Error("Informe um email válido");
  
  const id = generatedId()

  const token = generateToken({id})

  const result = await connection("introducao_autenticacao").where({email, password})

  if(result.length === 0) throw new Error("Usuário não encontrado");
  
  res.send({token})
    
  } catch (error: any) {
    res.send(error.message || error.sqlMessage)
  }
}