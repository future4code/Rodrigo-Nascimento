import express from "express"
import { UserBusiness } from "../business/UserBusiness"
import { UserController } from "../controller/UserController"
import { UserDatabase } from "../data/UserDatabase"
import { Authenticator } from "../services/Authenticator"
import { HashManager } from "../services/HashManager"
import { IdGenerator } from "../services/IdGenerator"

const userController = new UserController(
  new UserBusiness(
    new UserDatabase(),
    new IdGenerator(),
    new HashManager(),
    new Authenticator()
  )
)

export const userRouter = express.Router()

userRouter.get("/feed", userController.feed)
userRouter.post("/login", userController.login)
userRouter.post("/signup", userController.signup)
userRouter.put("/follow/:id", userController.followUser)
userRouter.put("/unfollow/:id", userController.unfollowUser)