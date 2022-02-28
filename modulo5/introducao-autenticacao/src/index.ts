import app from "./app";
import { createUser } from "./endpoints/createUser";
import { userLogin } from "./endpoints/userLogin";
import { getUserProfile } from "./endpoints/userProfile";
import { generatedId } from "./services/generateId";

app.get("/user/profile", getUserProfile)
app.post("/user/signup", createUser)
app.post("/user/login", userLogin)