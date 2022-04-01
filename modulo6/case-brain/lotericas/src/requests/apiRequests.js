import axios from "axios"
import { BASE_URL } from "../constants/urls"

export const getLoterias = (setData) => {
  axios.get(`${BASE_URL}/loterias`)
    .then((res) => {
      setData(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
}

export const getConcursos = (setData, setId) => {
  axios.get(`${BASE_URL}/loterias-concursos`)
    .then((res) => {
      setData(res.data)
      setId(res.data.map(e => e.concursoId))
    })
    .catch((err) => {
      console.log(err)
    })
}

export const getConcursosById = (id, setData, setDate) => {
  console.log("id", id)
  if (id.lenght === 0) {
    console.log("oir")
    axios.get(`${BASE_URL}/concursos/${id}`)
      .then((res) => {
        setData(res.data.numeros)
        setDate(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  } else {
    console.log("olar")
    axios.get(`${BASE_URL}/concursos/${id}`)
      .then((res) => {
        setData(res.data.numeros)
        setDate(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
}