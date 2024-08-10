


import jwt from "jsonwebtoken"
import Doctor from "../models/DoctorSchema.js"
import User from "../models/UserSchema.js"


export const authenticate=async (req,res,next)=>{

    // get token from headers
    const authToken=req.headers.authorization

    // Bearer then actual token

    if(!authToken || !authToken.startsWith('Bearer')){
        return res.status(401).json({success:false,message:"No token exist,authorization failed"})
    }
    try {
        
        const token=authToken.split(' ')[1];

        // verify token 
        const decoded=jwt.verify(token,process.env.JWT_SECRET_Key)
        res.userId=decoded.id;
        req.role=decoded.role;

        next();  //must call the next funtion 
    } catch (error) {
        if(error.name==='TokenExpiredError'){
            return res.status(401).json({message:'Token is expired '});
        }
        return res.status(401).json({success:false,message:"invalid token"})
    }
}

export const restrict= roles=>async (req,res,next)=>{
    const userId=req.userId
   

    let user;
    const patient=await  User.findById(userId);
    const doctor=await  Doctor.findById(userId);
    if(patient){
        user=patient;
    }

    if(doctor){
        user=doctor;
    }

    
    if ( roles.includes(user?.role)) {
        return res.status(401).json({success:false,message:"U are not authorized"})

    }
    next();


}