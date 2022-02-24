import { app } from "./app";
import { signup } from "./endpoints/signup";

//criar usuário
app.post("/signup", signup)