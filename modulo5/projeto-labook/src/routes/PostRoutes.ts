import express from "express";
import { PostBusiness } from "../business/PostBusiness";
import { PostController } from "../controller/PostController";
import { PostDatabase } from "../data/PostDatabase";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

const postController = new PostController(
  new PostBusiness(
    new PostDatabase(),
    new IdGenerator(),
    new Authenticator()
  )
)

export const postRouter = express.Router()

postRouter.get("/:id", postController.getPostById)
postRouter.post("/create", postController.createPost)