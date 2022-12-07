const mongoose = require("mongoose")

const dishesSchema = new mongoose.Schema({

    img: {type:String,required:true},
    name: {type:String,required:true},
    qty: {type:String,required:true},
    price: {type:String,required:true},
    count: {type:Number,required:true},
    stock: {type:String,required:true},
    category: {type:String,required:true},
   


})

const DishesModel = mongoose.model("dish",dishesSchema)


module.exports ={
    DishesModel
}