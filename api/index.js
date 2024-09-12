import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import listingRouter from "./routes/listing.route.js";

dotenv.config();

//mongoDB connection
mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Database Connected");
}).catch((err)=>{
    console.log(err);
})

//express app connection
const app = express();

//middlewares
app.use(express.json());
app.use(cookieParser());
//middleware for errors
app.use((err, req, res, next)=>{
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal Server Error";
    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    });
});


//server setup and connection
app.listen(3000, () => {
    console.log(`Server is running at port 3000.`);
});


//test api route
app.use('/api/user',userRouter);
//signup post api route
app.use('/api/auth',authRouter);
//listing Route for property listing
app.use('/api/listing',listingRouter);


