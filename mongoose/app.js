const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost:27017/sohel",{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("Connection Successfully"))
.catch((err)=>console.log(err));

const playlistSchema= new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    lname:String,
    age:Number,
    active:Boolean,
    date:{
        type:Date,
        default:Date.now
    }
})
const Playlist= new mongoose.model("playlist",playlistSchema);

const createDcoument=async()=>{
   try{
    const aPlaylist = new Playlist({
        name:"salman",
        lname:"khan",
        age:50,
        active:true,
    })
    const bPlaylist = new Playlist({
        name:"sameer",
        lname:"khan",
        age:28,
        active:true,
    })

const result = await Playlist.insertMany([aPlaylist,bPlaylist]);
console.log(result);
}catch(err){
    console.log(err);  
}
}
// createDcoument();

const getDocument = async ()=>{
    const result = await Playlist.find().select("name");
    console.log(result);
}
getDocument();
