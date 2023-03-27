
const mongoose=require('mongoose')
const express=require('express')
const { tokenValidator } = require('../midlleware/validator')

const testRoute=express.Router()

testRoute.get('/test',tokenValidator,async(req,res)=>{
res.send("testing passed")
})

module.exports={
    testRoute
}