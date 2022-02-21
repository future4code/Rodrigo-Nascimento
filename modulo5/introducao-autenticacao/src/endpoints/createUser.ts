import { generatedId } from "../services/generateId"
import { Request, Response } from "express"
import connection from "../connection"
import { AuthenticationData, generateToken } from "../services/generateToken"

export const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const { email, password }: {email: string, password: string} = req.body

    const verifyEmail = email.includes("@")

    if(!verifyEmail || !email) throw new Error("Informe um email válido")

    if(password.length <= 6 || !password) throw new Error("Informe uma senha com mais de 6 caracteres ou uma senha válida")
    
    const id = generatedId()

    const token = generateToken({id})

    const newUser = await connection("introducao_autenticacao")
      .insert({
        id,
        email,
        password
      })
  
    res.send({token: token})
    
  } catch (error: any) {
    res.send(error.message || error.sqlMessag) 
  }
}