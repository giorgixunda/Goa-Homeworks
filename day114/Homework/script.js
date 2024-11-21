// 1 davaleba
const {existsSync, rmSync, mkdirSync,writeFileSync, appendFileSync, readdirSync} = require("fs")

for (let i = 1; i <= 10; i++) {
    mkdirSync(`./level${i}`, { recursive:true }); 
    mkdirSync(`./level${i}/classwork`, { recursive:true }); 
    mkdirSync(`./level${i}/homework`, { recursive:true });
     writeFileSync(`./level${i}/classwork/classwork.js`,`console.log('goa is best')`,(err) => {
        if(err) throw err
    })
    writeFileSync(`./level${i}/homework/homework.js`,`console.log('goa is best')`,(err) => {
        if(err) throw err
    })
}


for (let i = 3; i <= 7; i++) {
    mkdirSync(`folder${i}`)
    const folderPath = `folder${i}`;
    if (existsSync(folderPath)) {
        rmSync(folderPath, { recursive: true, force: true });
        console.log(`ფოლდერი ${folderPath} წაიშალა.`);
    }
}



appendFileSync("log.txt", `${new Date().toLocaleString()} - "status" - "message"\n`);


const http = require("http")

const server = http.createServer((req, res) => {
    res.end("Welcome To Goa")
})

const PORT = 5000

server.listen(PORT, (err) =>{
    if(err) throw err
    console.log(`Welcome To Goa`)
})