import express, { Request, Response } from "express"
import { connection } from ".."
import { pegarInformacaoEndereco } from "../services/pegarInformacaoEndereco"
import { mailTransporter } from "../services/mailTransporter"

export const criarEndereco = async (req: Request, res: Response): Promise<void> => {
  try {
    const { cep, numero, complemento }: { cep: string, numero: string, complemento: string } = req.body

    const endereco = await pegarInformacaoEndereco(cep)
    
    const resultado = await connection("user_address_info")
      .insert({
        cep,
        logradouro: endereco?.logradouro,
        numero,
        complemento,
        bairro: endereco?.bairro,
        cidade: endereco?.cidade,
        estado: endereco?.estado
      })

      const info = await mailTransporter.sendMail({
        from: `<${process.env.NODEMAILER_USER}>`,
        to: "g6e8k2i3m1o7e5d9@labenualunos.slack.com",
        subject: "Testando o nodemailer",
        text: "É assim que o spam é criado?",
        html: "<p>É assim que o spam é criado?</p>"
       })
       

    res.send({message: "Endereço cadastrado com sucesso!"})

  } catch (error: any) {
    res.send(error.message || error.sqlMessage)
  }
}