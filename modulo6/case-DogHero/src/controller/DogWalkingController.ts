import { Request, Response } from "express";
import { DogWalkingBusiness } from "../business/DogWalkingBusiness";
import { CreateWalk, EditWalk } from "../model/DogWalking";

export class DogWalkingController {
  constructor(
    private dogWalkingBusiness: DogWalkingBusiness
  ) {}

  index = async (req: Request, res: Response) => {
    const buscar = req.query.buscar as string
   
    try {
      const result = await this.dogWalkingBusiness.getAllTasks(buscar)

      res.send({result})
    
    } catch (error: any) {
      res.status(400).send(error.message)
    }
  }

  create = async (req: Request, res: Response) => {
    // const { date, price, duration, latitude, longitude, pets, start_time, end_time } = req.body
    const { date, latitude, longitude, pets } = req.body

    const input: CreateWalk = {
      date,
      latitude,
      longitude,
      pets
    } 

    try {
      const result = await this.dogWalkingBusiness.createWalk(input)

      res.send({message: "Passeio cadastrado com sucesso!"})

    } catch (error: any) {
      res.status(400).send(error.message || error.sqlMessage)
    }
  }

  edit = async (req: Request, res: Response) => {
    const { id } = req.params
    const { status, price, duration, start_time, end_time } = req.body

    const input: EditWalk = {
      id,
      status,
      price,
      duration,
      start_time,
      end_time
    }

    try {
      const result = await this.dogWalkingBusiness.editWalk(input)

      res.send({result})
      
    } catch (error: any) {
      res.status(400).send(error.message || error.sqlMessage)
    }
  }

}