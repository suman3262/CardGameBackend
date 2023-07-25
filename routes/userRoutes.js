const express=require("express");
const router=express.Router();

//import the require controler and middleware

const{sendOTP,login,signup}=require("../controler/auth")


// ********************************************************************************************************
//                                     Authentication routes
// ********************************************************************************************************
router.post("/send/otp",sendOTP);
router.post("/signup",signup);
router.post("/login",login);


module.exports=router;