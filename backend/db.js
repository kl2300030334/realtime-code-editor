const mongoose=require("mongoose")
function db()
{
    mongoose.connect(process.env.MONGODB_URL).then(()=>{
        console.log("mongodb is connected successfully")
    }).catch((err)=>{
        console.log('error in connecting')
    })
}

module.exports=db 