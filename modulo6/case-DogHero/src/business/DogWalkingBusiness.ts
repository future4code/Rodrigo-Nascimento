import { DogWalkingDatabase } from "../data/DogWalkingDatabase"
import { CreateWalk, DogWalking, Duration } from "../model/DogWalking"
import { IdGenerator } from "../services/IdGenerator"
import { Validator } from "../services/Validator"

export class DogWalkingBusiness {
  constructor(
    private idGenerator: IdGenerator,
    private validator: Validator,
    private dogWalkingDatabase: DogWalkingDatabase
  ) { }

  getAllTasks = async (future: string) => {
    // if (future) {
    //   throw new Error("Só é permitida uma opção de filtro. Escolha entre 'todos' ou 'futuros'.")
    // }
    const result = await this.dogWalkingDatabase.getAllWalks()

    return result
  }

  createWalk = async (input: CreateWalk) => {
    if (!input) {
      throw new Error("É necessário passar as informações de: 'date', 'price', 'duration', 'latitude', 'longitude', 'pets', 'start_time', 'end_time'")
    }

    if (this.validator.givenDateIsGreaterThanTodayShouldReturnTrue(input.date) !== true) {
      throw new Error("Os passeios só podem ser criados no dia posterior ao dia de hoje")
    }
    
    if(this.validator.isTheTimeFormatValid(input.start_time, input.end_time) !== true){
      throw new Error("Informe um formato de data válido.")
    }

    if (input.duration !== Duration.HALF_HOUR && input.duration !== Duration.ONE_HOUR){
      throw new Error("Informe uma 'duration' válida. Durações válidas são '30' ou '60'")
    }

    if(input.price <= 0 || input.pets <= 0){
      throw new Error("Informe um 'price' ou 'pets' válidos")
    }

    if(input.price !== this.validator.totalPricePerPetIsCorrect(input.duration, input.pets)){
      throw new Error(`Valor informado está incorreto. O 'price' deveria ser igual a ${this.validator.totalPricePerPetIsCorrect(input.duration, input.pets)}`)
    }

    if(this.validator.areLatituteAndLongituteValid(input.latitude, input.longitude) !== true){
      throw new Error("Valor de 'latitude' ou 'longitude' inválido. É necessário informar os valores em graus")
    }

    if(this.validator.validateWalkTimes(input.start_time, input.end_time) !== true){
      throw new Error("'start_time' e 'end_time' precisam ter uma diferença de 30 ou 60 minutos. Informe os dados corretamente");
    }

    const id = this.idGenerator.generate()

    const newDate = this.validator.validDateForMysql(input.date)

    const dogWalking = new DogWalking(id, newDate, input.price, input.duration, input.latitude, input.longitude, input.pets, input.start_time, input.end_time)

    const result = await this.dogWalkingDatabase.createWalk(dogWalking)

    return result
  }
}