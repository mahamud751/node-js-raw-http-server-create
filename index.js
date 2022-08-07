const http = require('http')
const fs= require('fs')


const PORT =process.env.PORT
const localhost='127.0.0.1'

const handleServer=(fileName,statusCode,req,res)=>{
    fs.readFile(fileName,'utf-8',(err,data)=>{
        if(err){
            console.log(err)
        }
        else{
            res.writeHead(statusCode,{'Content-type':'text/html'})
            res.write(data)
            res.end()
        }
    })
}

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
      handleServer('index.html',200,req,res)
    }
    else if(req.url==='/about.html'){
      handleServer('about.html',200,req,res)
    }
    else if(req.url==='/contact.html'){
      handleServer('contact.html',200,req,res)
    }
    else{
        handleServer('error.html',400,req,res)
    }
})

server.listen(PORT,localhost,()=>{
    console.log(`connect with http://${localhost}:${PORT}`)
})