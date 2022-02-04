import express, { Express, Request, Response } from "express"
import cors from "cors"
import { AddressInfo } from "net"
import connection from "./connection"
import knex from "knex"

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

    if (!name || !nickname || !email) {
      codeError = 422
      throw new Error("Dados não preenchidos")
    }

    await connection("ToDoList")
      .insert({
        id,
        name,
        nickname,
        email
      })

    res.status(201).send("Pessoa cadastrada com sucesso!")

  } catch (error: any) {
    res.status(codeError).send(error.message || error.sqlMessage)
  }
})

app.get("/user/:id", async (req: Request, res: Response): Promise<void> => {
  let codeError = 400
  try {
    const id: string = req.params.id

    if (!id) {
      codeError = 422
      throw new Error("Informe um ID válido")
    }

    const result = await connection("ToDoList")
      .select("id", "nickname")
      .where("id", id)

    if(result.length === 0){
      codeError = 422
      throw new Error("ID não encontrado")
    }

    res.send(result)

  } catch (error: any) {
    res.status(codeError).send(error.message || error.sqlMessage)
  }
})

app.put("/user/edit/:id", async (req: Request, res: Response): Promise<void> => {
  let codeError = 400
  try {
    const id = req.params.id
    const { name, nickname, email }: { name: string, nickname: string, email: string } = req.body

    if (nickname === "" || name === "" || email === "") {
      codeError = 422
      throw new Error("Verifique o preenchimento dos campos")
    }

    const result = await connection("ToDoList")
      .update({name, nickname, email})
      .where("id", id)

    res.status(201).send("Alterações feitas com sucesso!")

  } catch (error: any) {
    res.status(codeError).send(error.message || error.sqlMessage)

  }
})

app.post("/task", (req: Request, res: Response) => {
  let codeError = 400
  try {
    const { title, description, limitDate, creatorUserId }: { title: string, description: string, limitDate: string, creatorUserId: string } = req.body
    const taskId: string = Date.now().toString()

    if (!title || !description || !limitDate || !creatorUserId) {
      codeError = 422
      throw new Error("Dados inválidos")
    }

    const changeDate = (date: string) => {
      const newDate = date.split("/")
      return newDate[2] + "-" + newDate[1] + "-" + newDate[0] as string
    }

    const data = "30/01/2003"
    console.log(changeDate(data))

    res.send({ title, description, limitDate, creatorUserId })

  } catch (error: any) {
    res.status(codeError).send(error.message || error.sqlMessage)
  }

})

app.get("/task/:id", (req: Request, res: Response) => {
  let codeError = 400
  try {


  } catch (error: any) {
    res.status(codeError).send(error)
  }
})