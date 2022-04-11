import { DogWalkingDatabase } from "../data/DogWalkingDatabase"
import { CreateWalk, DogWalking, Duration, EditWalk, Status } from "../model/DogWalking"
import { IdGenerator } from "../services/IdGenerator"
import { Validator } from "../services/Validator"

export class DogWalkingBusiness {
  constructor(
    private idGenerator: IdGenerator,
    private validator: Validator,
    private dogWalkingDatabase: DogWalkingDatabase
  ) { }

  getAllTasks = async (input?: string) => {
    let result
    if (input?.toUpperCase() === Status.AGENDADO.toUpperCase() || input?.toUpperCase() === Status.REALIZADO.toUpperCase()) {
      result = await this.dogWalkingDatabase.getFutureOrPastWalks(input.toUpperCase())
    } else {
      result = await this.dogWalkingDatabase.getAllWalks()
    }
    const tasksResult = result.map((task) => {
      const date = new Date(task.date).toLocaleDateString("pt-BR")
      return ({
        id: task.id,
        status: task.status,
        date: date,
        price: task.price,
        duration: task.duration,
        latitude: task.latitude,
        longitude: task.longitude,
        pets: task.pets,
        startTime: task.start_time,
        endTime: task.end_time
      })
    })
    return tasksResult
  }

  createWalk = async (input: CreateWalk) => {
    if (!input.date || !input.latitude || !input.longitude || !input.pets) {
      throw new Error("É necessário passar as informações de: 'date', 'latitude', 'longitude', 'pets'")
    }

    if (this.validator.givenDateIsGreaterThanTodayShouldReturnTrue(input.date) !== true) {
      throw new Error("Os passeios só podem ser criados no dia posterior ao dia de hoje")
    }

    if (this.validator.isDateFormatValid(input.date) !== true) {
      throw new Error("Informe um formato correto de data")
    }

    if (input.pets <= 0) {
      throw new Error("Informe um número de 'pets' válidos")
    }

    if (this.validator.areLatituteAndLongituteValid(input.latitude, input.longitude) !== true) {
      throw new Error("Valor de 'latitude' ou 'longitude' inválido. É necessário informar os valores em graus")
    }

    const id = this.idGenerator.generate()

    const newDate = this.validator.validDateForMysql(input.date)

    const dogWalking = new DogWalking(id, newDate, input.latitude, input.longitude, input.pets)

    const result = await this.dogWalkingDatabase.createWalk(dogWalking)

    return result
  }

  editWalk = async (input: EditWalk) => {
    if (!input.id || !input.duration || !input.endTime || !input.price || !input.startTime || !input.status) {
      throw new Error("É necessário informar 'id', 'status', 'price', 'duration', 'startTime', 'endTime'");
    }
  
    if (this.validator.isTheTimeFormatValid(input.startTime, input.endTime) !== true) {
      throw new Error("Informe um formato de data válido.")
    }

    if (this.validator.validateWalkTimes(input.startTime, input.endTime) !== true) {
      throw new Error("'startTime' e 'endTime' precisam ter uma diferença de 30 ou 60 minutos. Informe os dados corretamente");
    }

    if (input.duration !== Duration.HALF_HOUR && input.duration !== Duration.ONE_HOUR) {
      throw new Error("Informe uma 'duration' válida. Durações válidas são '30' ou '60'")
    }

    const getWalkById = await this.dogWalkingDatabase.getWalkById(input.id)

    if (!getWalkById) {
      throw new Error("Passeio não encontrado. Informe um 'id' válido")
    }
    
    if (input.price !== this.validator.totalPricePerPetIsCorrect(input.duration, getWalkById.pets)) {
      throw new Error(`Valor informado está incorreto. O 'price' deveria ser igual a ${this.validator.totalPricePerPetIsCorrect(input.duration, getWalkById.pets)}`)
    }

    if(getWalkById.status === Status.REALIZADO){
      throw new Error("Esse passeio já foi realizado. Só é possível alterar passeios 'A realizar'")
    }

    if (input.status !== Status.REALIZADO) {
      throw new Error(`O status do passeio deve ser alterado para '${Status.REALIZADO}'`);
    }

    const editWalk = await this.dogWalkingDatabase.editWalk(input)

    return editWalk
  }
}