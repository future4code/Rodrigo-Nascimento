import { app } from "./app";
import { UserBusiness } from "./business/UserBusiness";
import { UserController } from "./controller/UserController";
import { UserDatabase } from "./data/UserDatabase";
import { Authenticator } from "./services/Authenticator";
import { HashManager } from "./services/HashManager";
import { IdGenerator } from "./services/IdGenerator";

const userController = new UserController(
  new UserBusiness(
    new UserDatabase(),
    new IdGenerator(),
    new HashManager(),
    new Authenticator()
  )
)

//USUÁRIOS
//login usuário
app.post("/user/login", userController.login)
//criar usuário
app.post("/user/signup", userController.signup)