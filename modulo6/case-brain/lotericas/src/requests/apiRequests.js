import axios from "axios"
import { BASE_URL } from "../constants/urls"

export const getLoterias = (setData, setId, setName) => {
  axios.get(`${BASE_URL}/loterias`)
    .then((res) => {
     setData(res.data)
     setId(res.data.map(result => result.id))
     setName(res.data.map(result => result.nome))
    })
    .catch((err) => {
      console.log(err)
    })
}