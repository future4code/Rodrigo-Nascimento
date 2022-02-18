import app from "./app"
import { createProduct } from "./endpoints/createProduct"
import { createPurchaseRecord } from "./endpoints/createPurchaseRecord"
import { createUser } from "./endpoints/createUser"
import { getAllProducts } from "./endpoints/getAllProducts"
import { getAllPurchases } from "./endpoints/getAllPurchases"
import { getAllUsers } from "./endpoints/getAllUsers"

app.get("/products", getAllProducts)
app.get("/users", getAllUsers)
app.get("/users/:user_id/purchases", getAllPurchases)
app.post("/products", createProduct)
app.post("/purchases", createPurchaseRecord)
app.post("/users", createUser)