import express from "express"
import { connectDB } from "./db/Connectdb.js"
const app = express()
import dotenv from "dotenv"
import path from "path"
app.use(express.static(path.join(process.cwd(), "public")))
dotenv.config()
app.get("/",(req,res) => {
    res.status(200).send("Hello")
})
app.get("/user",(req,res) => {
    res.status(200).sendFile(path.resolve(process.cwd(), "./public/user.html"));
})
app.get("/content",(req,res) => {
    res.status(200).sendFile(path.resolve(process.cwd(), "./public/Content.html"))
})
app.get("/admin-page",(req,res) => {
    res.status(200).sendFile(path.resolve(__dirname, "./public/admin-page.html"))
})

app.all("*",(req,res)=> {
    res.status(404).send("Page Not Found 404")
})
app.listen(process.env.PORT,() => {
    connectDB()
    console.log(`Server Running On http://localhost:${process.env.PORT}`)
})