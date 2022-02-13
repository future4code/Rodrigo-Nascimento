import { baseURL } from "./baseURL";
import axios from "axios"

//a
//se mantermos a mesma função do exercício dois, não temos erro de tipagem.

//b
//Por não saber a informação que vem do data.

type usuario = {
  id: string,
  name: string,
  email: string
}

const todosAssinantes = async ():Promise<usuario[]> => {
  const resultado = await axios.get(`${baseURL}/subscribers`)
  return resultado.data.map((res:usuario) => {
    return{
      id: res.id,
      name: res.name,
      email: res.email
    }
  })
}

todosAssinantes().then(console.log)