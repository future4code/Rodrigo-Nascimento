import express, { Request, Response } from "express"
import { AddressInfo } from "net"
import { send } from "process"
import { produtos } from "./data"

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

app.get("/produtos", (req: Request, res: Response) => {

  res.status(200).send({ result: produtos })

})

app.post("/criar", (req: Request, res: Response) => {
  try {
    const id = (produtos.length + 1).toString()
    const name: string = req.body.name
    const price: number = req.body.price

    if (typeof name !== "string" || typeof price !== "number" ) {
      throw new Error("Tipo name ou price inválido")
    }

    if(price <= 0){
      throw new Error("Price menor ou igual a 0")
    }

    produtos.push({ id, name, price })

    res.status(200).send({ result: produtos })

  } catch (error: any) {
    switch(error.message){
      case "Tipo name ou price inválido":
        res.status(401)
        break
      case "Price menor que 0":
        res.status(401)
        break
      default:
        res.status(500)
    }
    res.send(error.message)

  }
})

app.put("/editar/:id", (req: Request, res: Response) => {
  let id = req.params.id
  const name: string = req.body.name
  const price: number = req.body.price

  for (let i = 0; i < produtos.length; i++) {
    if (produtos[i].id === id) {
      produtos.splice(i, 1)
    }
  }

  produtos.push({ id, name, price })

  res.send({ result: produtos })

})

app.delete("deletar/:id", (res: Response, req: Request) => {
  const id = req.params.id
  const name = req.body.name
  const price = req.body.price
  
  
})