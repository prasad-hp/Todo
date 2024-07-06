import express from "express"
import userRouter from "./routes/user"
import todoRouter from "./routes/todo"
import dotenv from "dotenv"
dotenv.config()

const app = express()
const port = 8080;
app.use("/user", userRouter)
app.use("/todo", todoRouter)
app.use(express.json())

app.get("/", async(req, res)=>{
    res.send("hello")
})

app.listen(port, ()=>{
    console.log(`Listening to port on ${port}`)
})