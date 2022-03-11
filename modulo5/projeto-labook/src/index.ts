import { app } from "./app";
import { PostController } from "./controller/PostController";
import { postRouter } from "./routes/PostRoutes";
import { userRouter } from "./routes/UserRoutes";



//USUÁRIOS
//login usuário
// app.use("/post", userController.login)
//criar usuário
app.use("/user", userRouter)

app.use("/post", postRouter)