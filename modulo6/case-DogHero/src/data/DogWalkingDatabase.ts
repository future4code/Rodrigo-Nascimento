import { CreateWalk, DogWalking, DogWalkingResponse, EditWalk } from "../model/DogWalking";
import { BaseDatabase } from "./BaseDatabase";

export class DogWalkingDatabase extends BaseDatabase{
  protected TABLE_NAME = "dog_hero"

  getAllWalks = async (): Promise<DogWalkingResponse[]> => {
    const result = await BaseDatabase.connection(this.TABLE_NAME)
      .select()
      .orderBy("date")
    
    return result
  }

  getFutureOrPastWalks = async (task: string): Promise<DogWalkingResponse[]> => {
    const result = await BaseDatabase.connection(this.TABLE_NAME)
      .select()
      .where({status: task})
      .orderBy("date")
    
    return result
  }

  createWalk = async (dogWalking: DogWalking): Promise<void> => {
    const newWalk = await BaseDatabase.connection(this.TABLE_NAME)
      .insert({
        id: dogWalking.getId(),
        date: dogWalking.getDate(),
        latitude: dogWalking.getLatitute(),
        longitude: dogWalking.getLongitute(),
        pets: dogWalking.getPets(),
      })
  }

  getWalkById = async (id: string): Promise<DogWalkingResponse | undefined> => {
    const result = await BaseDatabase.connection(this.TABLE_NAME)
      .select()
      .where({id: id})
    
    return result[0]
  }

  editWalk = async (input: EditWalk): Promise<void> => {
    const result = await BaseDatabase.connection(this.TABLE_NAME)
      .select()
      .where({id: input.id})
      .update({
        status: input.status,
        price: input.price,
        duration: input.duration,
        start_time: input.startTime,
        end_time: input.endTime
      })
  }
  
}