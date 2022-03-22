import { CreateWalk } from "../model/DogWalking"
import { IdGenerator } from "../services/IdGenerator"

export class DogWalkingBusiness {
  constructor(
    private idGenerator: IdGenerator
  ){}

  getAllTasks = async (todos: string, futuros: string) => {
    if(todos && futuros){
      throw new Error("Só é permitida uma opção de filtro. Escolha entre 'todos' ou 'futuros'.")
    }
  }

  createWalk = async (input: CreateWalk) => {
    if(!input){
      throw new Error("É necessário passar as informações de: 'date', 'price', 'duration', 'latitude', 'longitude', 'pets', 'start_time', 'end_time'")
    }
  
  }
}