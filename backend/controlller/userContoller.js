// const user = require("../models/user");
const userModel=require("../models/user")
const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt");
require('dotenv').config()

const register= async (req,res)=>{
    try{
        console.log("register");
        console.log(req.body);
        const existUser= await userModel.findOne({email:req.body.email});
        if(existUser){
            return res.send("errror")
        }
        const hasPassword = await bcrypt.hash(req.body.password, 10);
        const newUser= await userModel.create({
            username: req.body.username,
            email: req.body.email,
            password: hasPassword,
            role:req.body.role
        })
        console.log(newUser);
        // localStorage.setItem("userInfo",newUser)
        const token=jwt.sign({email:newUser.email,id:newUser._id},process.env.Secretkey)
        res.status(newUser)
        // res.cookie('token',token);
        // res.redirect('/login')

    }
    catch(err){
        console.log(err);
    }
   
}
const login=async (req,res)=>{
    let token
    try{
        console.log(req.body,"login");
        const existUser= await userModel.findOne({email:req.body.email});
        if(!existUser){
           return res.status(404).json({message:"User not Found"});
        }
        const matchPassword= await bcrypt.compare(req.body.password,existUser.password);
        if(!matchPassword){
            return res.status(400).json({message:"Invalid Credential"});
        }
        token=jwt.sign({email:existUser.email,id:existUser._id},process.env.Secretkey)
        // session=req.session;
        // session.tokenLogin=token
        // console.log("login");
        return res.send(existUser)
    }
    catch(err){
        console.log(err);
       
        return res.status(500).json({message:"something wrong",token});
    }
}

const getData=(req,res)=>{
    console.log(req.userId);
    res.status(200).json({message:"Sucees",id:req.userId})
}

module.exports={register,login,getData}