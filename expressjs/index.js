const express = require("express");
const bodyParser=require("body-parser");
const app = express();
app.use(bodyParser.json());
app.get("/",(req,res)=>{
    res.send("Hello World");
});
app.get("/user/:id?",(req,res)=>{
    // console.log(req.params);
    if(req.params.id==undefined)
    res.send("All data accesed");
    else
    res.send("Data Access: "+req.params.id);
});
app.get("/flight/:From.:To",(req,res)=>{
    console.log(req.body);
    res.send("Search flight : "+ "From " + req.params.From + " To "  + req.params.To);
});
app.put("/contact",(req,res)=>{
    console.log(req.body);
    res.send("Hello Contact page");
});
app.post('/ab', function (req, res,next) {
    console.log(req.body);
    res.send('POST request to the homepages');
    
  });
app.listen(8000,()=>{
    console.log("port 8000...")
})
