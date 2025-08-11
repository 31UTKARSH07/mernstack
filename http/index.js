const http = require("http")

const myServer = http.createServer((req, res) => {
    console.log("req made");
    console.log(req);
    res.end('This is my server')
    
})
myServer.listen(8001,()=>{
    console.log("Server Started");
})