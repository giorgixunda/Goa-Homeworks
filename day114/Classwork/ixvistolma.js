const {readFileSync, writeFileSync, mkdirSync, rmdirSync,  readdirSync} = require("fs")

const textFile = readFileSync("./text.txt", "utf-8", (err) =>  {
    if(err) console.log(err)
})
console.log(textFile)

// mkdirSync("./level10")
// mkdirSync("./level10/cw")
//             //   "file saxeli" "content"
// writeFileSync("./level10/goa.js",`console.log('hello world')`,(err) => {
//         if(err) throw err
//     })


for (let i = 1; i <= 50; i++) {
                            // qmnis axal folderebs da skipavs dzvels
    if(true){
        mkdirSync(`level${i}`, { recursive:true } ); 
    }
    else{
        rmdirSync(`level${i}`, { recursive:true } ); 
    }
}

const files = readdirSync("./","utf-8",(err) =>{
    if(err) throw err
})


writeFileSync("./image.json", `${files}`)
console.log(files)