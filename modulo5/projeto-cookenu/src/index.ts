import { app } from "./app";
import { getUserById } from "./endpoints/getUserById";
import { getUserProfile } from "./endpoints/getUserProfile";
import { login } from "./endpoints/login";
import { signup } from "./endpoints/signup";

//pegar usuário pelo id
app.get("/user/:id", getUserById)
//pegar perfil do usuário
app.get("/user/profile", getUserProfile)
//login
app.post("/login", login)
//criar usuário
app.post("/signup", signup)