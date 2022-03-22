import express from "express";
import { DogWalkingBusiness } from "../business/DogWalkingBusiness";
import { DogWalkingController } from "../controller/DogWalkingController";
import { IdGenerator } from "../services/IdGenerator";


const dogWalkingController = new DogWalkingController(
  new DogWalkingBusiness(
    new IdGenerator()
  )
)


export const dogWalkingRouter = express.Router()

dogWalkingRouter.get("/", dogWalkingController.index)
dogWalkingRouter.post("/criar", dogWalkingController.create)

