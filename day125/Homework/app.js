const http = require("http")
const {readFileSync} = require("fs")
const about = readFileSync("./Htmls/about.html")
const homepage = readFileSync("./Htmls/homepage.html")
const css = readFileSync("./style.css")

const server = http.createServer((req,res) =>{
    if(req.url === "/"){
        res.writeHead(200, {"Content-Type": "text/html"})
        res.write("hello")
        res.end()
    }
    else if(req.url === "/about"){
        res.writeHead(200, {"Content-Type": "text/html"})
        res.write(about)
        res.end()
    }
    else if(req.url ==="/homepage"){
        res.writeHead(200, {"Content-Type": "text/html"})
        res.write(homepage)
        res.end()
    }
    else if(req.url === "/book"){
        res.writeHead(200, {"Content-Type": "text/html"})
        res.end("book")
    }
    else if(req.url == "/style.css"){
        res.writeHead(200, {"Content-Type": "text/css"})
        res.write(css)
        res.end()
    }
    else{
        res.writeHead(404, {"Content-Type": "text/html"})
        res.end("404 page not found")
    }
})

const PORT = 5000
server.listen(PORT,() => {
    console.log("hiii")
})