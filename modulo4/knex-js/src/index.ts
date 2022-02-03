import express, { Express, Request, Response } from "express"
import cors from "cors"
import { AddressInfo } from "net"
import connection from "./connection"


const app: Express = express()
app.use(express.json())
app.use(cors())

//1
//a

app.get("/actor", async (req: Request, res: Response): Promise<void> => {
  let codeError = 500
  try {
    const getActorById = async (id: string): Promise<any> => {
      const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = ${id};
      `)
      return result[0][0]
    }
    (async () => {
      res.send(await getActorById(req.query.id as string))
    })()

  } catch (error: any) {
    res.status(codeError).send(error.sqlMessage || error.message)
  }

})

//b

app.get("/actor/:name", async (req: Request, res: Response): Promise<void> => {
  let codeError = 500
  try {
    const getActorByName = async (name: string): Promise<any> => {
      const result = await connection.raw(`
      SELECT * FROM Actor WHERE name = "${name}";
      `)
      return result[0][0]
    }

    (async () => {
      res.send(await getActorByName(req.params.name as string))
    })()

  } catch (error: any) {
    res.send(error.sqlMessage)
  }
})

app.get("/actor/status/:gender", async (req: Request, res: Response): Promise<void> => {
  try {
    const getActorByGender = async (gender: string): Promise<any> => {
      const result = await connection.raw(`
      SELECT COUNT(*) as quantidade FROM Actor WHERE gender = "${gender}"
      `)

      return result[0][0]
    }

    (async () => {
      res.send(await getActorByGender(req.params.gender as string))
    })()

  } catch (error: any) {
    res.send(error.message)
  }
})

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo
    console.log(`Servidor rodando em http://localhost:${address.port}`)
  } else {
    console.error("Falha ao iniciar o servidor")
  }
})