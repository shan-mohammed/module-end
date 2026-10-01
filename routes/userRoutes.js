const express =require ("express")
const router =express.Router();
const authMiddleware = require("../middlewares/authMiddleware")
const authorize = require("../middlewares/roleMiddleware")



router.get("/profile",authMiddleware, (req,res)=>{
    res.json({
        sucess :true,
        message:"You can access this protected route",
        user : req.user
    })
})

// Admin only
router.get("/admin",authMiddleware,authorize("admin"),(req,res)=>{
    res.json({
        success :true,
        message:"Welcome admin",
        user : req.user
    })
})

module.exports = router;