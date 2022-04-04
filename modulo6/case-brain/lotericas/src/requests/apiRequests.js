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

export const getConcursos = (setData) => {
  axios.get(`${BASE_URL}/loterias-concursos`)
    .then((res) => {
      setData(res.data)
    })
    .catch((err) => {
      console.log(err)
    })
}

export const getConcursosById = (id, setNumbers, setData) => {
  if(id.length === 0){
    id = 2359
  }
  axios.get(`${BASE_URL}/concursos/${id}`)
    .then((res) => {
      setNumbers(res.data.numeros)
      setData([res.data])
    })
    .catch((err) => {
      console.log(err)
    })

}