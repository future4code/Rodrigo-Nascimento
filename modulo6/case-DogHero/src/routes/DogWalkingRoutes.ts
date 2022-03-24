import express from "express";
import { DogWalkingBusiness } from "../business/DogWalkingBusiness";
import { DogWalkingController } from "../controller/DogWalkingController";
import { DogWalkingDatabase } from "../data/DogWalkingDatabase";
import { IdGenerator } from "../services/IdGenerator";
import { Validator } from "../services/Validator";


const dogWalkingController = new DogWalkingController(
  new DogWalkingBusiness(
    new IdGenerator(),
    new Validator(),
    new DogWalkingDatabase()
  )
)


export const dogWalkingRouter = express.Router()

dogWalkingRouter.get("/", dogWalkingController.index)
dogWalkingRouter.post("/criar", dogWalkingController.create)

