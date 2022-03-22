import { app } from "./app";
import { dogWalkingRouter } from "./routes/DogWalkingRoutes";


app.use("/passeios", dogWalkingRouter)