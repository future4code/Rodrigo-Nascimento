import app from "./app"
import { createProduct } from "./endpoints/createProduct"
import { createUser } from "./endpoints/createUser"
import { getAllProducts } from "./endpoints/getAllProducts"
import { getAllUsers } from "./endpoints/getAllUsers"

app.get("/users", getAllUsers)
app.get("/products", getAllProducts)
app.post("/products", createProduct)
app.post("/users", createUser)