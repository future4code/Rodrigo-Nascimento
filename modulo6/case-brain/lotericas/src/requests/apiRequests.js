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
      console.log(res.data)
      setData(res.data)
      setId(res.data.map(res => res.concursoId))
    })
    .catch((err) => {
      console.log(err)
    })
}

export const getConcursosById = (id, setData) => {
  axios.get(`${BASE_URL}/concursos/${id}`)
    .then((res) => {
      setData(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
}