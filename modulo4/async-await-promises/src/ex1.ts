import axios from "axios";
import { baseURL } from "./baseURL";

//a
//GET/subscribers

//b
//Promise<any[]>

async function todosAssinantes():Promise<any[]>{
  const resultado = await axios.get(`${baseURL}/subscribers`)
  return resultado.data
}

todosAssinantes().then(console.log)