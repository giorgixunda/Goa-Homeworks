import express from "express"
import cors from "cors"
const app = express()
app.use(cors())
const Filmebi = {
    title:"ქართული ფილმები",
    first:"ჯარისკაცის მამა",
    second:"მიზანი",
    third:"ნატვრის ხე",
    fourth:"გასეირნება ყარაბაღში"
}
const Musics = {
    titleMusic:"მუსიკები",
    firstMusic:"random music idk ;-;"
} 
const Images = {
    titleImage: "სურათები",
}
const FacebookUser = {
    User:"Facebook User"
}
app.get("/Image",(req,res) => {
    try {
        res.status(200).json(Images)
    } catch (error) {
        res.status(500).json({error: error})
    }  
})
app.get("/Music",(req,res) => {
    try {
        res.status(200).json(Musics)
    } catch (error) {
        res.status(500).json({error: error})
    }  
})
app.get("/filmebi",(req,res) => {
    try {
        res.status(200).json(Filmebi)
    } catch (error) {
        res.status(500).json({error: error})
    }  
})
app.get("/FacebookUser",(req,res) => {
    try {
        res.status(200).json(FacebookUser)
    } catch (error) {
        res.status(500).json({error: error})
    }  
})
const PORT = 5000
app.listen(PORT,() => {
    console.log(`Server http://localhost:${PORT}`)
})