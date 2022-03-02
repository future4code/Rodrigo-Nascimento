import { app } from "./app"
import { createRecipe } from "./endpoints/createRecipe"
import { editRecipe } from "./endpoints/editRecipe"
import { followUser } from "./endpoints/followUser"
import { getUserFeed } from "./endpoints/getUserFeed"
import { getRecipeById } from "./endpoints/getRecipeById"
import { getUserById } from "./endpoints/getUserById"
import { getUserProfile } from "./endpoints/getUserProfile"
import { login } from "./endpoints/login"
import { signup } from "./endpoints/signup"
import { unfollowUser } from "./endpoints/unfollowUser"
import { deleteRecipe } from "./endpoints/deleteRecipe"
import { deleteUser } from "./endpoints/deleteUser"

//USER
//pegar feed do usuário
app.get("/user/feed", getUserFeed)
//pegar perfil do usuário
app.get("/user/profile", getUserProfile)
//pegar usuário pelo id
app.get("/user/:id", getUserById)
//login
app.post("/login", login)
//criar usuário
app.post("/signup", signup)
//seguir usuário
app.post("/user/follow", followUser)
//deixar de seguir usuário
app.post("/user/unfollow", unfollowUser)
//deletar usuário
app.delete("/user/delete/:id", deleteUser)

//RECIPE
//pegar receita pelo id
app.get("/recipe/:id", getRecipeById)
//criar receita
app.post("/recipe", createRecipe)
//editar receita
app.post("/recipe/edit/:id", editRecipe)
//deletar receita
app.delete("/recipe/delete/:id", deleteRecipe)
