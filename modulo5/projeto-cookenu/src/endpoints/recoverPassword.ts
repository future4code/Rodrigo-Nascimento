import { Request, Response } from "express";
import { UserDatabase } from "../data/UserDatabase";
import { HashManager } from "../services/HashManager";
import { transporter } from "../services/mailTransporter";

export const recoverPassword = async (req: Request, res: Response) => {
  let codeError = 500
  try {
    const { email } = req.body

    if (!email) {
      codeError = 422
      throw new Error("Informe um email")
    }

    const userDatabase = new UserDatabase()
    const user = await userDatabase.findUserByEmail(email)

    if (!user) {
      codeError = 422
      throw new Error("Email não cadastrado")
    }

    const generatePassword = Math.floor(Math.random() * 65536).toString()

    const hashManager = new HashManager()
    const hashPassword = await hashManager.hash(generatePassword)

    const newUserPassword = await userDatabase.newPassword(hashPassword, email)

    const recover = await transporter.sendMail({
      from: `<${process.env.NODEMAILER_USER}>`,
      to: `${email}`,
      subject: "Recuperação de senha",
      text: `Sua nova senha de acesso é:${generatePassword}`,
      html: `Sua nova senha de acesso é: <b>${generatePassword}<p>`
    })

    res.status(200).send("Nova senha enviada para o email cadastrado.")

  } catch (error: any) {
    res.status(codeError).send(error.message)
  }
}