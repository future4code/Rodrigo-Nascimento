import express, {Request, Response} from "express"
import { AddressInfo } from "net"

const app = express()

app.use(express.json())

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Servidor rodando em http://localhost:${address.port}`)
  } else {
    console.error(`Falha ao iniciar o servidor`)

  }
})

app.get("/test", (req: Request, res: Response) => {
  res.status(200).send("Api funcionando")
})