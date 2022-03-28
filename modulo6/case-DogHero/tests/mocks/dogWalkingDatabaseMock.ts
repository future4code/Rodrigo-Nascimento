import { DogWalkingResponse, DogWalking, EditWalk, Status } from "../../src/model/DogWalking"
import { dogWalkingMock1, dogWalkingMock2 } from "./dogWalkingMock"


export class DogWalkingDatabaseMock {

    getAllWalks = async (): Promise<DogWalkingResponse[]> => {
        return [dogWalkingMock1, dogWalkingMock2]
    }
    getFutureOrPastWalks = async (task: string): Promise<DogWalkingResponse[] | undefined> => {
        if(task === Status.AGENDADO){
            return [dogWalkingMock1]
        } else if( task === Status.REALIZADO){
            return [dogWalkingMock2]
        }
    }
    createWalk = async (dogWalking: DogWalking): Promise<void> => {}
    getWalkById = async (id: string): Promise<DogWalkingResponse | undefined> => {
        if(id === "id1"){
            return dogWalkingMock1
        } else if(id === "id2"){
            return dogWalkingMock2
        } else{
            undefined
        }
    }
    editWalk = async (input: EditWalk): Promise<void> => {}
}