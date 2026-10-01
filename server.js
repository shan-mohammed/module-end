const express = require("express")
const cors = require("cors")
const dotenv =require("dotenv")
const cookieParser = require("cookie-parser")

const connectDB =require("./config/db")
const authRoutes =require("./routes/authRoutes")
const userRoutes =require("./routes/userRoutes")
dotenv.config()
const app= express()

const PORT = process.env.PORT  ||5000;  

// middleware
app.use(cors())
app.use(express.json())
app.use(cookieParser())

// Database
connectDB()

app.use ("/api/auth",authRoutes);
app.use("/api/users",userRoutes);


// test route
app.get("/",(req,res)=>{
   res.json({
    message:"E-commerce backend API is running"
   })
})
// server
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
})