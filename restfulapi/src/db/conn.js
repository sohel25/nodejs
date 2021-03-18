const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/studentsapi",{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true,useFindAndModify:false})
.then(()=>{
    console.log("conncetion is success");

}).catch((e)=>{
console.log("no connection");
});
