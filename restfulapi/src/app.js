const express = require("express");
require("./db/conn");
const Student = require("./db/models/students");
const app = express();
const port = process.env.PORT || 8000;
app.use(express.json());
app.get('/students',async (req,res)=>{
   try{
      const studentData=await Student.find();
    res.send(studentData);
   }catch(e){
       res.status(400).send();
   }

})
app.get("/students/:name",async(req,res)=>{
    try{
        const _id=req.params.name;
   const studentData  = await Student.findOne({_id});
        console.log(studentData);

   if(!studentData){
       return res.status(404).send();
   }else{
        res.send(studentData);
   }
    }
    catch(e){
        res.send(e);
    }
})
// app.post('/students',(req,res)=>{
//     console.log(req.body);
//     const user = new Student(req.body);
//     user.save().then(()=>{
//         res.status(201).send(user);
//     }).catch((e)=>{
//         res.status(400).send(e);
//     })
// })
app.post('/students',async (req,res)=>{
        try{
            const user = new Student(req.body);
            const createUser = await user.save();
            console.log(createUser);
            res.status(201).send(user);
        }catch(e){
            res.status(400).send(e);
        }
})
app.listen(port,()=>{
    console.log(`connection is setup at ${port}`);
})