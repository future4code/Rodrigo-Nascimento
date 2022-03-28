import { DogWalkingResponse, Duration, Status } from "../../src/model/DogWalking"

export const dogWalkingMock1: DogWalkingResponse  = {
  id: "id1",
  status: Status.AGENDADO,
  date: "25/10/2022",
  price: 75,
  duration: Duration.TO_DO,
  latitude: "-8.0088900",
  longitude: "-34.8552800",
  pets: 2,
  start_time: "A realizar",
  end_time: "A realizar"
}

  export const dogWalkingMock2: DogWalkingResponse  = {
    id: "id2",
    status: Status.REALIZADO,
    date: "25/10/2020",
    price: 75,
    duration: Duration.ONE_HOUR,
    latitude: "-8.0088900",
    longitude: "-34.8552800",
    pets: 2,
    start_time: "11:30",
    end_time: "2:30"
  }
