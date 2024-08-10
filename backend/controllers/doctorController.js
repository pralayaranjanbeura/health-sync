

import Booking from "../models/BookingSchema.js"
import Doctor from "../models/DoctorSchema.js"



export const updateDoctor = async (req, res) => {
    const id = req.params.id

    try {
        const updatedDoctor = await Doctor.findByIdAndUpdate(id, { $set: req.body },{ new: true })

        res.status(200).json({ success: true, meassage: "Successfully updated", data: updatedDoctor })
    } catch (error) {
        res.status(404).json({ success: false, meassage: "Failed to update" })
        console.log(error)

    }
}


export const deleteDoctor = async (req, res) => {
    const id = req.params.id

    try {
        await Doctor.findByIdAndDelete(id, { $set: req.body },{ new: true })

        res.status(200).json({ success: true, meassage: "Successfully deleted" })
    } catch (error) {
        res.status(404).json({ success: false, meassage: "Failed to delete" })

    }
}

export const getSingleDoctor = async (req, res) => {
    const id = req.params.id

    try {
        //  await User.findOneAndUpdate(id, { $set: req.body },{ new: true })

        // - password to remove existing password 
        const doctor=await Doctor.findById(id).populate('reviews').select('-password');

        res.status(200).json({ success: true,
             meassage: "User found", 
             data:doctor
            })
    } catch (error) {
        res.status(404).json({ success: false, meassage: "Failed to update" })

    }
}

export const getAllDoctor = async (req, res) => {
    

    try {
        //  await User.findOneAndUpdate(id, { $set: req.body },{ new: true })
        const {query}=req.query;
        let doctors;
        if(query){
            doctors=await Doctor.find({
                isApproved:"approved",
                $or:[
                    {name:{$regex:query, $options:'i'}},
                    {specialization:{$regex:query, $options:'i'}}

                ]
            }).select('-password');
        }
        else{
         doctors=await Doctor.find({isApproved:'approved'}).select('-password'); 
        }
        res.status(200).json({ success: true,
             message: "Users found", 
             data:doctors 
            })
    } catch (error) {
        res.status(404).json({ success: false, message: "Not found" })

    }
}

 export const doctorProfile=async(req,res)=>{
    const doctorId = req.userId;

    try {
        const doctor = await Doctor.findById(doctorId);

        if (!doctor) {
            return res.status(404).json({ success: true, message: "Doctor not found" });
        }

        const { password, ...rest } = doctor._doc;

        const appointments=await Booking.find({doctor:doctorId})

        res.status(200).json({ success: true, message: "Profile info is getting", data: [...rest,appointments] })
    } catch (error) {
        return res.status(500).json({ success: false, message: "Something went wrong" });

    }

}