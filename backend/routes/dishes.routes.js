const {Router} = require("express")
const { authentication } = require("../middlewares/authentication")
const dishesController = Router()

const {DishesModel} = require("../models/dishes.model")




dishesController.get("/" ,async(req,res)=>{

const dishes = await DishesModel.find({})

    res.json({dishes})

})
// img: {type:String,required:true},
//     name: {type:String,required:true},
//     qty: {type:String,required:true},
//     price: {type:String,required:true},
//     count: {type:Number,required:true},
//     stock: {type:String,required:true},
//     category: {type:String,required:true},
   
dishesController.use(authentication)

dishesController.post("/create" ,async(req,res)=>{

const {img,name,qty,price,count,stock,category} = req.body

const dish = new DishesModel({
    img,name,qty,price,count,stock,category
}) 

try{
       await dish.save()
       res.json({msg:" dish added successfully",dish})
}
catch(err){
    res.json({msg:"Something went wrong dishe not added",Error:err})
}

})


dishesController.delete("/delete/:dishId",async(req,res)=>{
   const {dishId} = req.params
   const deleted = await DishesModel.findOneAndDelete({_id:dishId})
   if(deleted){
    res.json({msg:"Dish deleted",deleted})
   }
   else{
    res.json({msg:"Dish not deleted"})
   }
   
})


dishesController.patch("/update/:id",async(req,res)=>{
   const {id} = req.params
   const updated = await DishesModel.findOneAndUpdate({_id:id},req.body)
   if(updated){
    res.json({msg:"Dish updated ",updated})
   }
   else{
    res.json({msg:"Dish not updated"})
   }
})




module.exports ={
    dishesController
}