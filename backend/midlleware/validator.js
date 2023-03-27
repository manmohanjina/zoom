const jwt = require("jsonwebtoken");
require('dotenv').config()

const tokenValidator = (req, res, next) => {
  const userPassedToken = req.headers.authorization;

  if (!userPassedToken) {
    res.status(401).send({ error: "please login again" });
  } else {
   jwt.verify(userPassedToken,process.env.key,(err,decode)=>{
        if(err){
            res.status(401).send({'error':"please login again",err})
        }
       else if(decode){
        //console.log(decode,"decode obj")
        next()
       }
       else{
        res.status(401).send({"error":"please login again"})
       }
    });
  }
};

module.exports={
    tokenValidator
}
