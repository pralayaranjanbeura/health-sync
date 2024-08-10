

import User from '../models/UserSchema.js'
import Booking from "../models/BookingSchema.js"
import Doctor from "../models/DoctorSchema.js"

export const updateUser = async (req, res) => {
    const id = req.params.id

    try {
        const updatedUser = await User.findByIdAndUpdate(id, { $set: req.body }, { new: true })

        res.status(200).json({ success: true, meassage: "Successfully updated", data: updatedUser })
    } catch (error) {
        res.status(404).json({ success: false, meassage: "Failed to update" })
        console.log(error)

    }
}


export const deleteUser = async (req, res) => {
    const id = req.params.id

    try {
        await User.findByIdAndDelete(id, { $set: req.body }, { new: true })

        res.status(200).json({ success: true, meassage: "Successfully deleted" })
    } catch (error) {
        res.status(404).json({ success: false, meassage: "Failed to delete" })

    }
}

export const getSingleUser = async (req, res) => {
    const id = req.params.id

    try {
        //  await User.findOneAndUpdate(id, { $set: req.body },{ new: true })

        // - password to remove existing password 
        const user = await User.findById(id).select('-password');

        res.status(200).json({
            success: true,
            meassage: "User found",
            data: user
        })
    } catch (error) {
        res.status(404).json({ success: false, meassage: "Failed to update" })

    }
}

export const getAllUser = async (req, res) => {


    try {
        //  await User.findOneAndUpdate(id, { $set: req.body },{ new: true })

        const users = await User.find({});

        res.status(200).json({
            success: true,
            meassage: "Users found",
            data: users
        })
    } catch (error) {
        res.status(404).json({ success: false, meassage: "Not found" })

    }
}


export const getUserProfile = async (req, res) => {
    const userId = req.userId;
    try {
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        const { password, ...rest } = user._doc

        res.status(200).json({ success: true, message: "Profile info is getting", data: [...rest] })
    } catch (error) {
        return res.status(500).json({ success: false, message: "Something went wrong" });
        console.log(error);

    }


}

export const getAppointment = async (req, res) => {
    try {
        // step-1 retrieve appointment from booking
        const bookings = await Booking.find({ user: req.userId })

        // step-2 extract ids from appoinment booking  
        const doctorIds = bookings.map(el => el.doctor.id)
        // retrive doctor using doctorid 
        const doctors = await Doctor.find({ _id: { $in: doctorIds } }).select('-password')

        res.status(200).json({ success: true, message: "Apponment conformed", data: doctors })


    }
    catch (err) {
        res.status(500).json({ success: false, message: "Appoinment canceled" })

    }


}