export class DogWalking {
  constructor(
    private id: string,
    private status: Status,
    private date: string,
    private price: number,
    private duration: Duration,
    private latitude: string,
    private longitude: string,
    private pets: number,
    private start_time: string,
    private end_time: string
    ){}
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