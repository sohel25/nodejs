const fs = require("fs");
const data ={
    name:"sohel",
    age:24,
    designation:"Developer"
}
const jsonData = JSON.stringify(data);
console.log(jsonData);
fs.writeFile("json.json",jsonData,(err)=>{
    console.log("Done..");
});
fs.readFile("json.json","utf-8",(err,data)=>{
    console.log(data);
})
