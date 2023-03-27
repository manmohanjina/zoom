
const mongoose=require('mongoose')

const todoSchema=mongoose.Schema({
 
    titel:{
        type:String,
        require:true,
    },
    status:{
        type:Boolean,
        require:true
    },
    additionalnote:{
        type:String,
        require:true
    },
    userID:string


})

const todoModel=mongoose.model('alltodo',todoSchema)

module.exports={
    todoModel
}