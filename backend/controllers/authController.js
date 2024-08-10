

import User from '../models/UserSchema.js'
import Doctor from "../models/DoctorSchema.js"
import bcrypt from "bcryptjs"
import jsonWebToken from "jsonwebtoken"





const generateToken=user=>{
    return jsonWebToken.sign({id:user._id,role:user.role},process.env.JWT_SECRET_Key,{expiresIn:'300d'});
    
}


export const register = async(req,res)=>{
    const  {email,password,role,photo,name,gender}=req.body
    try {
        let user=null;
        if(role==='patient'){
            user=await User.findOne({email});

        }
        else if(role==='doctor'){
            user=await Doctor.findOne({email});
        }
      
        // check user exist or not 
        if(user){
            return res.status(400).json({message:"user already exist"});
         
        }


        // hash password =>for creating new user
        const salt=await bcrypt.genSalt(10);
        const hashPassword= await bcrypt.hash(password,salt);

        if(role==='patient'){
            user=new User({
                email,
                name,
                password:hashPassword,
                role,
                gender,
                photo
            })
        }

        if(role==='doctor'){
            user=new Doctor({
                email,
                name,
                password:hashPassword,
                role,
                gender,
                photo
            })
        }

        await user.save();
        res.status(200).json({ success:true,message:"User successfully created"})



    } catch (error) {
        res.status(500).json({success:false,message:"Internal error occured"})
        console.log(error);
        
    }
}


export const login =async (req,res)=>{

    const {email ,password}=req.body;

    try {
        let user=null;

        const patient= await User.findOne({email});
        const doctor= await Doctor.findOne({email});

        if(patient){
            user=patient;
        }
        if(doctor){
            user=doctor;

        }

        // check if user exist or not
        if(!user){
            res.status(404).json({
                        message:"User not found"
            })
        }

        const isPasswordMatch =await bcrypt.compare(req.body.password,user.password);
        if(!isPasswordMatch){
            res.status(400).json({
                success:true,message:"Invalid password"
            })
        }

        // get token 
        const token=generateToken(user);


        // Generate token
        const {password,role,appoinment,...rest}=user._doc

        res.status(200).json({
            success:true,
            message:"successfully login",
            token,
            data:{...rest},
            role

        })


        

        
    } catch (error) {
        res.status(404).json({success:false,message:"login  failed"})
        console.log(error);
        
    }
}

