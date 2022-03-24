export class DogWalking {
  constructor(
    private id: string,
    private date: string,
    private price: number,
    private duration: Duration,
    private latitude: string,
    private longitude: string,
    private pets: number,
    private start_time: string,
    private end_time: string
    ){}

    public getId(){
      return this.id
    }
    public getDate(){
      return this.date
    }
    public getPrice(){
      return this.price
    }
    public getDuration(){
      return this.duration
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
    public getStartTime(){
      return this.start_time
    }
    public getEndTime(){
      return this.end_time
    }

}

export enum Duration {
  HALF_HOUR = "30",
  ONE_HOUR = "60"
}

export enum Status {
  REALIZADAS = "REALIZADAS",
  FUTURAS = "FUTURAS"
}

export type CreateWalk = {
  date: string,
  price: number,
  duration: Duration,
  latitude: string,
  longitude: string,
  pets: number,
  start_time: string,
  end_time: string
}