// module.exports="Hello hii";
// module.exports.log=(msgs)=>{
//     console.log(msgs)

// }
const fs = require("fs");
const http = require("http");
const server = http.createServer((req,res)=>{
    if (req.url=="/") {
        res.end("This is home side");
    } else if(req.url=="/about")
    {
        res.writeHead(200,'content-type:text/html');
        res.end("<h1>This is about page</h1>");
        
    }
    else if(req.url=="/contact")
    {
        res.end("This is Contact page");
    }
    else if(req.url=="/userapi")
    {
        fs.readFile(`userapi.json`,"utf-8",(err,data)=>{
            console.log(data);
            res.end(data);
        })
        
    }
    else{
        res.end("404 Page not found");
    }

});
server.listen(3000,()=>{
    console.log("listening to the port no. 3000");
});
   