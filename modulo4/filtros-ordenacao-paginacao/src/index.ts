import { app } from "./app";
import { getAllUsers } from "./endpoints/getAllUsers";
import selectAllUsers from "./endpoints/selectAllUsers";


// 1. b
// app.get("/getAllUsers/:type", getAllUsers)

app.get("/getAllUsers/", getAllUsers)