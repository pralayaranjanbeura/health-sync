

import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"
import mongoose, { Query } from "mongoose"
import dotenv from "dotenv"

import authRoute from './routes/auth.js'

import  userRoute from './routes/user.js'

import doctorRoute from './routes/doctor.js'

import reviewRoute from "./routes/review.js"


// import  crypto  from "crypto";

// // Generate 256 random bytes and convert to base64 string
// const token = crypto.randomBytes(256).toString('base64');

// console.log('Secure Token:', token);


dotenv.config();


const app = express();
const port = process.env.PORT || 8000;



const corsOption = {
    origin: true,
}

app.get('/', (req, res) => {
    res.send("Api is working");
})


// Database connection



// middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors(corsOption));


app.use('/api/v1/auth',authRoute)
app.use('/api/v1/users',userRoute);
app.use('/api/v1/doctors',doctorRoute);
app.use('/api/v1/reviews',reviewRoute);



const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('DB connected')
    } catch (error) {
        console.log(error);

    }
}


app.listen(port, () => {
    connectDB();
    console.log(`Server is running on port ${port}`);
})

