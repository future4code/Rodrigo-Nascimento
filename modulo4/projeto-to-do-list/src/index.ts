import express, { Express, Request, Response } from "express"
import cors from "cors"
import { AddressInfo } from "net"
import connection from "./connection"
import { users } from "./data"

const app: Express = express()

app.use(express.json())
app.use(cors())

const server = app.listen(process.env.port || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo
    console.log(`Servidor rodando em http://localhost:${address.port}`)
  } else {
    console.error(`Falha ao iniciar o servidor`)
  }
})

app.post("/user", async (req: Request, res: Response): Promise<void> => {
  let codeError = 400
  try {
    const { name, nickname, email }: { name: string, nickname: string, email: string } = req.body
    const id: string = Date.now().toString()
    let guardaCoisa = []

    if (!name || !nickname || !email) {
      codeError = 401
      throw new Error("Dados não preenchidos")
    }

    guardaCoisa.push({ id, name, nickname, email })

    res.send({ name, nickname, email })

  } catch (error: any) {
    res.status(codeError).send(error.message)
  }
})

app.get("/user/:id", async (req: Request, res: Response): Promise<void> => {
  let codeError = 400
  try {
    const id: string = req.params.id
    let saveId

    if (!id) {
      codeError = 401
      throw new Error("Informe um ID válido")
    }

    const findUser = users.map((user) => {
      if (id === user.id) {
        saveId = user.nickname
      }
    })

    if (saveId === undefined) {
      codeError = 401
      throw new Error("ID não encontrado")
    }

    res.send({ id, nickname: saveId })

  } catch (error: any) {
    res.status(codeError).send(error.message)
  }
})

app.put("/user/edit/:id", async (req: Request, res: Response): Promise<void> => {
  let codeError = 400
  try {
    const id = req.params.id
    const { name, nickname, email }: { name: string, nickname: string, email: string } = req.body

    let saveName
    let saveNickname
    let saveEmail

    const findUser = users.filter((user) => {
      if (id === user.id) {
        saveName = user.name
        saveNickname = user.nickname
        saveEmail = user.email
      }
    })

    if (nickname === "" || name === "" || email === "") {
      codeError = 401
      throw new Error("Verifique o preenchimento dos campos")
    }

    if (name) {
      saveName = name
    }

    if (nickname) {
      saveNickname = nickname
    }

    if (email) {
      saveEmail = email
    }

    res.send({ name: saveName, nickname: saveNickname, email: saveEmail })

  } catch (error: any) {
    res.status(codeError).send(error.message)

  }
})

app.post("/task", (req: Request, res: Response) => {
  let codeError = 400
  try {
    const { title, description, limitDate, creatorUserId }: { title: string, description: string, limitDate: string, creatorUserId: string } = req.body
    const taskId: string = Date.now().toString()

    res.send({title, description, limitDate, creatorUserId})

  } catch (error: any) {
    res.status(codeError).send(error.message)

  }

})