const {Router} = require("express")

const userController = Router()
const jwt = require("jsonwebtoken")

const {UserModel} = require("../models/user.model")
require("dotenv").config()
 
 

userController.post("/signup",async(req,res)=>{

    const {email,password} = req.body

    const user = new UserModel ({
        email,
        password
    })
    try{
        await user.save()

        res.json({msg:"Signup Successfully"})
    }
    catch(err){
        // console.log(err)
        res.json({msg:"Something went wrongg"})
    }

})







userController.post("/login",async(req,res)=>{

    const {email,password} = req.body

    const user = await UserModel.findOne({email})

   if(user.password == password){
    
    let token = jwt.sign({userId : user._id},process.env.JWT_SECRET)
     
    res.json({token:token})

   }

   res.json({msg:"Something went wrong Please check your credentials"})

})

module.exports ={
    userController
} 