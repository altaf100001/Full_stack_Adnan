const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())
app.use(express.json())

const PORT = 8080

const {userController} = require("./routes/user.routes") 
const {dishesController} = require("./routes/dishes.routes")
const {connection} = require("./config/db")





app.get("/",(req,res)=>{

    res.send("Adnan chicken Home Page")

})

app.use("/user",userController)

app.use("/dishes",dishesController)




app.listen(PORT,async()=>{

    try{
        await connection
        console.log("Connected to DB")
    }
    catch(err){
        console.log(err,"Error Connected to DB")
    }

console.log(`You Are conneted to ${PORT}`)

})

