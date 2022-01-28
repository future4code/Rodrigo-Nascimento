import { AddressInfo } from "net"
import express, { Express, Request, Response } from "express"
import cors from "cors"
import { users } from "./data"


const app: Express = express()
app.use(express.json())
app.use(cors())

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo
    console.log(`Servidor rodando na http://localhost:${address.port}`)
  } else {
    console.error(`Falha ao iniciar o servidor`)
  }
})

//Exercício

//1.
//a. Método get
//b. "/users"

app.get("/users", (req: Request, res: Response) => {
  let codeError = 400
  try {
    res.status(200).send({ result: users })
  } catch (error: any) {
    res.status(codeError).send({ message: error.message })
  }
})

//2. passei a requisição via query para procurar o usuário por type.

app.get("/users/search", (req: Request, res: Response) => {
  let codeError = 400

  try {
    const type: string = req.query.type as string

    if (!type) {
      codeError = 404
      throw new Error("Type não encontrado")
    }

    const filterUser = users.filter((user) => {
      if (type.toLowerCase() === user.type.toLowerCase())
        return user
    })
    res.send({ result: filterUser })

  } catch (error: any) {
    res.status(codeError).send({ message: error.message })
  }
})

//3. assim como na questão anterior, utilizei o get para pesquisar via query (mesmo endpoint)

app.get("/users/search", (req: Request, res: Response) => {
  let codeError = 400
  try {
    const name: string = req.query.name as string

    if (!name) {
      codeError = 404
      throw new Error("Name não encontrado")
    }
    const nameFilter = users.filter((user) => {
      if (name.toLowerCase() === user.name.toLowerCase()) {
        return user
      }
    })
    res.send({ result: nameFilter })
  } catch (error: any) {
    res.status(codeError).send({ message: error.message })

  }
})

//4.
//a. Nada aconteceu
//b. O ideal seria POST, visto que ele está criando um novo usuário. PUT deveria ser usado para atualizar dados.

app.post("/create", (req: Request, res: Response) => {
  let codeError = 400
  try {
    const id = users.length + 1
    const {name, email, type, age} = req.body

    if (!name || !email || !type || !age) {
      codeError = 404
      throw new Error("Body incorreto");
    }

    users.push({id, name, email, type, age})
    res.status(200).send({result: users})

  } catch (error: any) {
    res.status(codeError).send({message: error.message})
  }
})