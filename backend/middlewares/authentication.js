const express = require("express")
const jwt = require("jsonwebtoken")

require("dotenv").config()

const authentication = (req,res,next) =>{

if(!req.headers.authorization){
  res.json({msg:"Please login again"})
}

const token = req.headers.authorization.split(" ")[1]

jwt.verify(token,process.env.JWT_SECRET,(err,decoded)=>{

    if(err){
        res.json({msg:"Please login again"})
    }
    else{
        // req.body.userId =  decoded.userId
        next()
    }

})

}
 
module.exports = {
    authentication
}