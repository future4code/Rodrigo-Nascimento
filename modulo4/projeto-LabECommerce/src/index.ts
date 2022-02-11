import app from "./app"
import { createProduct } from "./endpoints/createProduct"
import { createPurchaseRecord } from "./endpoints/createPurchaseRecord"
import { createUser } from "./endpoints/createUser"
import { getAllProducts } from "./endpoints/getAllProducts"
import { getAllUsers } from "./endpoints/getAllUsers"

app.get("/users", getAllUsers)
app.get("/products", getAllProducts)
app.post("/products", createProduct)
app.post("/purchases", createPurchaseRecord)
app.post("/users", createUser)