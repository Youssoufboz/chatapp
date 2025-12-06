import express from "express";
const router =express.Router();

router.get("/signin",(req,res)=>{
    res.send(' from send endpoint');
});

router.get("/login",(req,res)=>{
    res.send(' from login endpoint');
});
router.get("/signout",(req,res)=>{res.send('from signout endpoint');});

export default router;



