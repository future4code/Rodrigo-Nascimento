import express from "express"
import { AddressInfo } from "net"

const app = express()

app.use(express.json())

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo
    console.log(`Server is running in http://localhost:${address.port}`)
  } else {
    console.error(`Failure upon starting server.`)
  }
})

app.get("/", (req, res) => {
  res.status(200).send("Hello from Express")
})

type User = {
  id: number,
  name: string,
  phone: number,
  email: string,
  website: string
}

const users: User[] = [
  {
    id: 1,
    name: "rodrigo",
    phone: 111222,
    email: "rodrigo@email.com",
    website: "rodrigo.site.com"
  },
  {
    id: 2,
    name: "karen",
    phone: 222111,
    email: "kare@email.com",
    website: "karen.site.com"
  },
  {
    id: 3,
    name: "soraia",
    phone: 111333,
    email: "soraia@email.com",
    website: "soraia.site.com"
  }
]

app.get("/users", (req, res) => {
  res.status(200).send(users)
})

type UserPosts = {
  id: number,
  title: string,
  body: string,
  userId: number
}

const posts: UserPosts[] = [
  {
    id: 1,
    title: "primeiro post",
    body: "testando o primeiro post",
    userId: 1
  },
  {
    id: 2,
    title: "segundo post",
    body: "testando o segundo post",
    userId: 2
  },
  {
    id: 3,
    title: "terceiro post",
    body: "testando o terceiro post",
    userId: 3
  }
]

app.get("/posts", (req, res) => {
  res.status(200).send(posts)
})


app.get("/posts/:id", (req, res) => {
  const id = Number(req.params.id)

  const postsFilter = posts.filter((post) => {
    if (post.userId === id) {
      return post
    }
  })

  res.status(200).send(postsFilter)
})