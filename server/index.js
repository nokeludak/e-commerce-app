const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const userRouter = require("./routes/user")
const authRoute = require("./routes/auth")
const productRoute = require("./routes/product")
const cartRoute = require("./routes/cart")
const orderRoute = require("./routes/order")

dotenv.config()

const app = express()




app.use(express.json())
app.use("/api/auth", authRoute)
app.use("/api/users", userRouter)
app.use("/api/products", productRoute)
app.use("/api/carts", cartRoute)
app.use("/api/orders", orderRoute)








app.listen(process.env.PORT || 5000, () => {
    console.log("Server is running!")
})

mongoose
.connect(process.env.MONGO_URL)
.then(() => console.log('DBConnection Successfull!'))
.catch((err) => console.log(err));