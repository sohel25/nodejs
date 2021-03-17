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
// getDocument();
const updateDocument = async(_id)=>{
    try{
        const result = await Playlist.updateOne({_id},{
            $set:{
                name:"Sohel khan"
            }
        });
        console.log(result);
    }catch(err){
        console.log(err);
    }
}
// updateDocument("6050a3e72a0a7f31242b5ee9");

const deleteDocument = async(_id)=>{
    try{

        const result = await Playlist.findByIdAndDelete({_id});
        console.log(result);
    }catch(err){
        console.log(err);
    }

}
deleteDocument("6050a8c1b1a3e53532f24615");