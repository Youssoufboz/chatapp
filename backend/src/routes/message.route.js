import express from "express";
const router =express.Router();

router.get("/send",(req,res)=>{
    res.send(' from send endpoint');
});


export default router;



