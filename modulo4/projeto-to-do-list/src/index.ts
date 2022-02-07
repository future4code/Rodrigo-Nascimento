import express, { Express, Request, Response } from "express"
import cors from "cors"
import { AddressInfo } from "net"
import connection from "./connection"

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


//Pesquisar usuário
app.get("/user", async (req: Request, res: Response): Promise<void> => {
  let codeError = 400
  try {
    const query: string = req.query.query as string

    if (query?.length === 0) {
      codeError = 422
      throw new Error("Informe um termo de pesquisa válido")
    }

    const result = await connection("ToDoList")
      .select("id", "nickname")

    const filterUser = result.filter((user) => {
      if (query === user.email || query === user.nickname) {
        return ({
          id: user.id,
          nickname: user.nickname
        })
      }
    })

    if (filterUser.length === 0) {
      res.send({ users: [] })
    }

    res.status(201).send({ users: filterUser })

  } catch (error: any) {
    res.status(codeError).send(error.message)
  }
})

//Pegar todos os usuários
app.get("/user/all", async (req: Request, res: Response): Promise<void> => {

  const result = await connection("ToDoList")
    .select("id", "nickname")

  if (result.length === 0) {
    res.status(200).send([])
  } else {
    res.status(201).send({ users: result })
  }
})

//Pegar usuário pelo id
app.get("/user/:id", async (req: Request, res: Response): Promise<void> => {
  let codeError = 400
  try {
    const id: string = req.params.id

    if (id === ":id") {
      codeError = 422
      throw new Error("Informe um ID válido")
    }

    const result = await connection("ToDoList")
      .select("id", "nickname")
      .where("id", id)

    console.log(result, "result")

    if (result.length === 0) {
      codeError = 422
      throw new Error("ID não encontrado")
    }

    res.send(result)

  } catch (error: any) {
    res.status(codeError).send(error.message || error.sqlMessage)
  }
})

//Pegar tarefas criadas por um usuário // Pegar todas as tarefas por status // Procurar tarefa por termos
app.get("/task", async (req: Request, res: Response): Promise<void> => {
  let codeError = 400
  try {
    const creatorUserId: string = req.query.creatorUserId as string
    const taskStatus: string = req.query.status as string

    if (creatorUserId) {
      const result = await connection("ToDoListTask")
        .select()
        .join("ToDoList", "ToDoList.id", "ToDoListTask.creator_user_id")
        .where("ToDoListTask.creator_user_id", creatorUserId)

      const newData = result.map((task) => {
        return ({
          taskId: task.id,
          title: task.title,
          description: task.description,
          limitDate: task.limit_date.toLocaleString().slice(0, -9),
          status: task.status,
          creatorUserId: task.creator_user_id,
          creatorUserNickname: task.nickname
        })
      })

      if (result.length === 0) {
        codeError = 422
        throw new Error("Nenhuma tarefa encontrada")
      } else {
        res.status(201).send(newData)
      }

    } else if (taskStatus) {
        const result = await connection("ToDoListTask")
          .select()
          .join("ToDoList", "ToDoList.id", "ToDoListTask.creator_user_id")
          .where("status", taskStatus)

        const newData = result.map((task) => {
          return ({
            taskId: task.id,
            title: task.title,
            description: task.description,
            limitDate: task.limit_date.toLocaleString().slice(0, -9),
            creatorUserId: task.creator_user_id,
            creatorUserNickname: task.nickname
          })
        })

        if (result.length === 0) {
          res.status(201).send({ tasks: [] })
        } else {
          res.status(201).send({ tasks: newData })
        }
      } 

  } catch (error: any) {
    res.status(codeError).send(error.message)
  }
})

//Pegar todas as tarefas atrasadas
app.get("/task/delayed", async (req: Request, res: Response): Promise<void> => {
  let codeError = 400
  let date: string
  try {
    const result = await connection("ToDoListTask")
      .select()
      .join("ToDoList", "ToDoList.id", "ToDoListTask.creator_user_id")

    const delayedDate = result.filter((task) =>{
      const today: string = new Date as any
      if(today > task.limit_date){
        return task
      }
    }).map((taskMap) => {
      return({
        taskId: taskMap.id,
        title: taskMap.title,
        description: taskMap.description,
        limitDate: taskMap.limit_date.toLocaleString().slice(0, -9), 
        creatorUserId: taskMap.creator_user_id,
        creatorUserNickname: taskMap.nickname
      })
    })

    if(delayedDate.length === 0){
      codeError = 404
      throw new Error("Nenhuma tarefa atrasada foi encontrada")
    } else {
      res.status(201).send({tasks: delayedDate})
    }
  } catch (error: any) {
    res.status(codeError).send(error.message || error.sqlMessage)
  }

})
//Pegar tarefa pelo id
app.get("/task/:id", async (req: Request, res: Response): Promise<void> => {
  let codeError = 400
  let responsibleUserId: string[]
  try {
    const id: string = req.params.id

    const result = await connection("ToDoListTask")
      .select()
      .rightJoin("ToDoList", "ToDoList.id", "ToDoListTask.creator_user_id")
      .leftJoin("ToDoListResponsibleUserTaskRelation", "ToDoListResponsibleUserTaskRelation.task_id", "ToDoListTask.id")
      .where("ToDoListTask.id", id)
    responsibleUserId = result[0].responsible_user_id

    if (result.length === 0) {
      codeError = 422
      throw new Error("Task não encontrada")
    }

    const searchUser = await connection("ToDoList")
      .select("ToDoList.id", "ToDoList.nickname")
      .where("ToDoList.id", responsibleUserId)

    const newData = result.map((data) => {
      return ({
        taskId: id,
        title: data.title,
        description: data.description,
        limitDate: data.limit_date.toLocaleString().slice(0, -9),
        status: data.status,
        creatorUserId: data.creator_user_id,
        creatorUserNickname: data.nickname,
        responsibleUserId: searchUser
      })
    })

    res.status(201).send(newData)

  } catch (error: any) {
    res.status(codeError).send(error.message || error.sqlMessage)
  }
})

//Pegar usuários responsáveis por uma tarefa
app.get("/task/:id/responsible", async (req: Request, res: Response): Promise<void> => {
  let codeError = 400
  try {
    const id: string = req.params.id

    if (!id) {
      codeError = 422
      throw new Error("Preencha o campo id")
    }

    const result = await connection("ToDoList")
      .select("id", "nickname")
      .join("ToDoListResponsibleUserTaskRelation", "ToDoListResponsibleUserTaskRelation.responsible_user_id", "ToDoList.id")
      .where("task_id", id)

    res.status(201).send({ users: result })

  } catch (error: any) {
    res.status(codeError).send(error.message || error.sqlMessage)
  }

})

//Criar tarefa
app.post("/task", async (req: Request, res: Response): Promise<void> => {
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

    const newDate = changeDate(limitDate)

    const result = await connection("ToDoListTask")
      .insert({
        id: taskId,
        title: title,
        description: description,
        limit_date: newDate,
        creator_user_id: creatorUserId
      })

    res.send("Tarefa criada com sucesso!")

  } catch (error: any) {
    res.status(codeError).send({ result: error.message || error.sqlMessage })
  }

})

//Atribuir um usuário responsável a uma tarefa
app.post("/task/responsible", async (req: Request, res: Response): Promise<void> => {
  let codeError = 400
  try {
    const { taskId, responsibleUserId }: { taskId: string, responsibleUserId: string } = req.body

    if (!taskId || !responsibleUserId) {
      codeError = 422
      throw new Error("Preencha os campos corretamente")
    }

    const result = await connection("ToDoListResponsibleUserTaskRelation")
      .insert({
        task_id: taskId,
        responsible_user_id: responsibleUserId
      })

    res.status(201).send("Atribuído com sucesso")

  } catch (error: any) {
    res.status(codeError).send(error.message || error.sqlMessage)
  }
})

//Criar usuário
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

    res.status(201).send("Pessoa criada com sucesso!")

  } catch (error: any) {
    res.status(codeError).send(error.message || error.sqlMessage)
  }
})

//Atualizar o status da tarefa por id
app.put("/task/status/:id/", async (req: Request, res: Response): Promise<void> => {
  let codeError = 400
  try {
    const id: string = req.params.id
    const newStatus: string = req.body.status

    if (id === ":id") {
      codeError = 422
      throw new Error("Informe um ID")
    }

    if (!newStatus) {
      codeError = 422
      throw new Error("Informe uma atualização válida")
    }

    const result = await connection("ToDoListTask")
      .update("status", newStatus)
      .where("id", id)

    if (!result) {
      codeError = 422
      throw new Error("Verifique os dados")
    }

    res.status(201).send("Status da atividade atualizado")

  } catch (error: any) {
    res.status(codeError).send(error.message || error.sqlMessage)
  }
})

// Editar usuário
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
      .update({ name, nickname, email })
      .where("id", id)

    res.status(201).send("Alterações feitas com sucesso!")

  } catch (error: any) {
    res.status(codeError).send(error.message || error.sqlMessage)

  }
})

