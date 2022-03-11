import { app } from "./app";
import { postRouter } from "./routes/PostRoutes";
import { userRouter } from "./routes/UserRoutes";


app.use("/user", userRouter)

app.use("/post", postRouter)