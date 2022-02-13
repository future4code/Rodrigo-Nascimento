import { baseURL } from "./baseURL";
import axios from "axios"

const todosAssinantes = async (): Promise<any[]> =>  {
  const resultado = await axios.get(`${baseURL}/subscribers`)
  return resultado.data
}

todosAssinantes().then(console.log)
