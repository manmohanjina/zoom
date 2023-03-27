
const mongoose=require('mongoose')

const express=require('express')
const jwt=require('jsonwebtoken');
const { loginControllerRoute } = require('../routecontroller/loginRouteController');

const loginRoute=express.Router();


loginRoute.use('/login',loginControllerRoute)

module.exports={
    loginRoute
}
 