import { Request, Response } from "express"
import { UserBusiness } from "../business/UserBusiness"

const userBusiness = new UserBusiness()

export class UserController {

  signup = async (req: Request, res: Response): Promise<void> => {
    try {
      const { name, email, password, role} = req.body

      const token = await userBusiness.signup(name, email, password, role)

      res.send({message: "Usuário cadastrado", token})

    } catch (error: any) {
      res.status(400).send(error.message || error.sqlMessage)
    }
  }

  login = async(req: Request, res: Response): Promise<void> => {
    try {
      const { email, password } = req.body

      const token = await userBusiness.login(email, password)

      res.send({token})
      
    } catch (error: any) {
      res.status(400).send(error.message || error.sqlMessage)
    }
  }
}