import express from "express"
import { connectDB } from "./db/connectdb.js"
const app = express()
import dotenv from "dotenv"
dotenv.config()
app.get("/",(req , res) =>{
    res.status(200).send("hello")
})

app.listen(process.env.PORT,(err) => {
    connectDB()
    if (err) throw err
    console.log(`server running on http://localhost:${process.env.PORT}`)
})