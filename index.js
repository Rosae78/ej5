const http = require("http")
const path = require('path')
const fs = require("fs")

if(req.url === '/'){
    fs.readFile(
        path.join(__dirname, "ej5", "numerosjs"),
        (err, content) =>{
            if(err) throw err
            res.writeHead(200, {"Content-Type" : "text/html" })
            res.write(content)
            res.end()
        })
   