
const mongoose=require('mongoose');
 
  const regisetrSchema=mongoose.Schema({
   name:{
    type:String,
    require:true
   },
   email:{
    type:String,
    require:true
   },
   security:{
    type:String,
    require:true
   },
   password:{
    type:String,
    require:true,
   },
  })

  const registerModel=mongoose.model("registereduser",regisetrSchema)

  module.exports={
    registerModel
  }

