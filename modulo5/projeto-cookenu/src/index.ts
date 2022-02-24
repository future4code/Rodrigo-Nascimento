import { app } from "./app";
import { login } from "./endpoints/login";
import { signup } from "./endpoints/signup";


//login
app.post("/login", login)
//criar usuário
app.post("/signup", signup)