import express from "express"

export const userRouter = express.Router()

userRouter.post("/login")
userRouter.post("/signup")
