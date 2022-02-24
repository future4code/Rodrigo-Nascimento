import { app } from "./app";
import { createRecipe } from "./endpoints/createRecipe";
import { getUserById } from "./endpoints/getUserById";
import { getUserProfile } from "./endpoints/getUserProfile";
import { login } from "./endpoints/login";
import { signup } from "./endpoints/signup";

//pegar perfil do usuário
app.get("/user/profile", getUserProfile)
//pegar usuário pelo id
app.get("/user/:id", getUserById)
//login
app.post("/login", login)
//post
app.post("/recipe", createRecipe)
//criar usuário
app.post("/signup", signup)