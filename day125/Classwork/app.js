const http = require("http")
const {readFileSync} = require("fs")

const html = readFileSync("./index.html")
const css = readFileSync("./index.css")
const server = http.createServer((req,res) => {
    if(req.url === "/"){
        res.writeHead(200, {"Content-Type": "text/html"})
        res.write(html)
        res.end()
    }
    else if(req.url == "/index.css"){
        res.writeHead(200, {"Content-Type": "text/css"})
        res.write(css)
        res.end()
    }

    else if(req.url === "/book"){
        res.writeHead(200, {"Content-Type": "text/html"})
        res.end("book")
    }
    else{
        res.writeHead(404, {"Content-Type": "text/html"})
        res.end("404 page not found")
    }
})

// status 200 - successfully connect
// status 404 - page not found
const PORT = 5000
server.listen(PORT, () => {
    console.log("hello")
})