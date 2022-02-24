import { app } from "./app";
import { getUserProfile } from "./endpoints/getUserProfile";
import { login } from "./endpoints/login";
import { signup } from "./endpoints/signup";

//pegar perfil do usuário
app.get("/user/profile", getUserProfile)
//login
app.post("/login", login)
//criar usuário
app.post("/signup", signup)