import express, {Request, Response} from "express"
import { AddressInfo } from "net"
import { toDos, ToDos } from "./toDos"

const app = express()

app.use(express.json())

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo
    console.log(`Servidor está rodando em http://localhost:${address.port}`)
  } else {
    console.error(`Falha ao inciar o servidor`)
  }
})

app.get("/ping", (req: Request, res: Response) => {
  res.status(200).send("pong")
})

app.get("/completas", (req: Request, res: Response) => {
  const filterToDo = toDos.filter((todo) => {
    if(todo.completed === true){
      return todo
    }
  })

  res.status(200).send(filterToDo)
})

app.get("/tarefas", (req: Request, res: Response) => {
  const personId = Number(req.query.userId)
  // const userArray  = []
  let userArr: ToDos[] = []

  // for(let i = 0; i < toDos.length; i++){
  //   if(toDos[i].userId === personId){
  //     userArray.push(toDos[i])
  //   }
  // }

 toDos.forEach((user) => {
   if (user.userId === personId){
     userArr.push(user)
   }
  })

  res.send({result: userArr})

})

app.post("/criar", (req: Request, res: Response) => {
  const userId = req.body.userId
  const id = req.body.id
  const title = req.body.title
  const completed = req.body.completed

  toDos.push({userId, id, title, completed})
  
  res.send({ result: toDos })
 
})

app.post("/tarefas/editar", (req: Request, res: Response) => {
  const taskId = Number(req.query.id)
  const saveInfo = []

  const filterTask = toDos.filter((task) =>{
    if(task.id === taskId){
      task.completed = !task.completed
      return saveInfo.push(task)
    }
  })
  res.send(filterTask)
})

app.delete("/apagar/:id", (req: Request, res: Response) => {
  const id = Number(req.params.id)
  let newTask = []

  // const taskFilter = toDos.filter((task) =>{
  //   if(id !== task.id) {
  //     return task
  //   }
  // })

  for(let i = 0; i < toDos.length; i++){
    if(id !== toDos[i].id){   
      newTask.push(toDos[i])
    }
  }

  res.send({results : newTask})
})

