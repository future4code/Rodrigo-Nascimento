export class DogWalking {
  constructor(
    private id: string,
    private date: string,
    private latitude: string,
    private longitude: string,
    private pets: number
    ){}

    public getId(){
      return this.id
    }
    public getDate(){
      return this.date
    }
    public getLatitute(){
      return this.latitude
    }
    public getLongitute(){
      return this.longitude
    }
    public getPets(){
      return this.pets
    }

}

export enum Duration {
  HALF_HOUR = "30",
  ONE_HOUR = "60",
  TO_DO = "A realizar"
}

export enum Status {
  REALIZADO = "Realizado",
  AGENDADO = "Agendado"
}

// export type CreateWalk = {
//   date: string,
//   price: number,
//   duration: Duration,
//   latitude: string,
//   longitude: string,
//   pets: number,
//   start_time: string,
//   end_time: string
// }

export type CreateWalk = {
  date: string,
  latitude: string,
  longitude: string,
  pets: number,
}

export type EditWalk = {
  id: string,
  status: Status,
  price: number,
  duration: Duration,
  start_time: string,
  end_time: string
}

export type DogWalkingResponse = {
  id: string,
  status: Status
  date: string,
  price: number,
  duration: Duration,
  latitude: string,
  longitude: string,
  pets: number,
  start_time: string,
  end_time: string
}