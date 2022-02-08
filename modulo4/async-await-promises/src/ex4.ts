import axios from "axios"
import { baseURL } from "./baseURL"

type noticia = {
  title: string,
  content: string,
  date: number
}

const criarNoticia = () => {
  const body: noticia = {
    title: "CSS",
    content: "Alala alala",
    date: 1644281297
  }
  const resultado = axios.put(`${baseURL}/news`, body)
    .then((res) =>{
    console.log(res.data)
  }).catch((err) => {
    console.log(err.response.data)
  })
}

criarNoticia()