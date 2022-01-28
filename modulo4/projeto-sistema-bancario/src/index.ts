import express, { Express, Request, Response } from "express"
import cors from "cors"
import { AddressInfo } from "net"
import { clientes } from "./data"

const app: Express = express()
app.use(express.json())
app.use(cors())

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo
    console.log(`Servidor rodando em http://localhost:${address.port}`)
  } else {
    console.error(`Falha ao iniciar o servidor`)
  }
})

app.get("/usuarios", (req: Request, res: Response) => {
  res.send({ resultado: clientes })
})

app.post("/criar", (req: Request, res: Response) => {
  let codeError = 400
  try {
    const nome: string = req.body.nome
    const cpf: string = req.body.cpf
    const dataNasc: string = req.body.dataNasc
    const saldo: number = 0

    function comparaIdade(data: string) {
      const dataSemBarra = data.split("/")
      const converteIdade = new Date(Number(dataSemBarra[2]), Number(dataSemBarra[1]) - 1, Number(dataSemBarra[0])).getTime()
      const dataAtual = new Date().getTime()
      return Math.floor(((dataAtual - converteIdade) / 1000 / 60 / 60 / 24 / 365))
    }

    if(comparaIdade(dataNasc) < 18){
      codeError = 401
      throw new Error("Cliente menor de idade");
    }

    clientes.push({ nome, cpf, dataNasc, saldo })

    res.send({ resultado: nome, cpf, dataNasc })

  } catch (error: any) {
    res.status(codeError).send({mensagem: error.message})

  }

})