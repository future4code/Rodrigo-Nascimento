import { CreateWalk, DogWalking } from "../model/DogWalking";
import { BaseDatabase } from "./BaseDatabase";

export class DogWalkingDatabase extends BaseDatabase{
  protected TABLE_NAME = "dog_hero"

  createWalk = async (dogWalking: DogWalking) => {
    const newWalk = await BaseDatabase.connection(this.TABLE_NAME)
      .insert({
        id: dogWalking.getId(),
        date: dogWalking.getDate(),
        price: dogWalking.getPrice(),
        duration: dogWalking.getDuration(),
        latitude: dogWalking.getLatitute(),
        longitude: dogWalking.getLatitute(),
        pets: dogWalking.getPets(),
        start_time: dogWalking.getStartTime(),
        end_time: dogWalking.getEndTime()
      })
  }
  
}