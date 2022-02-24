import * as jwt from "jsonwebtoken"
import { UserRole } from "../entities/User"

export interface AuthenticationData {
  id: string,
  role: UserRole
}

//gera o token
export class Authenticator {
  public generate(input: AuthenticationData): string {
    const token = jwt.sign(input, process.env.JWT_KEY as string, {
      expiresIn: process.env.ACCES_TOKEN_EXPIRES_IN
    })
    return token
  }

  public getTokenData(token: string): AuthenticationData {
    const data = jwt.verify(token, process.env.JWT_KEY as string)
    return data as AuthenticationData
  }
}