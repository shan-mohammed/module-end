const express = require("express")
const cors = require("cors")
const dotenv =require("dotenv")
const connectDB =require("./config/db")

dotenv.config()
const app= express()

const PORT = process.env.PORT  ||5000;  

// middleware
app.use(cors())
app.use(express.json())

// Database
connectDB()

// test route
app.get("/",(req,res)=>{
   res.json({
    message:"E-commerce backend API is running"
   })
})
// server
app.listen(PORT,()=>{
    console.log(`Server is running on http://locaihost:${PORT}`)
})