const express = require("express");
const router =  express.Router();

router.get("/" , function (req , res , next ) {
    res.status(200).json({
        success:true, message:"Welcome to the API!"
    });
});

router.post("/create", function (req,res,next){
    res.status(201).json({
        success:true, user:req.body
    });
})

module.exports = router;