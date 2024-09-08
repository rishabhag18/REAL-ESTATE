import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
dotenv.config();


//mongoDB connection
//const mongoURI= "mongodb+srv://shaibalpatra7:dRoaxvDP1MBsQrHK@cluster0.wrc1vh3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Database Connected");
}).catch((err)=>{
    console.log(err);
})

//express app connection
const app = express();
app.use(express.json());
//test api route
app.use('/api/user',userRouter);

//signup post api route
app.use('/api/auth',authRouter);


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


app.listen(3000, () => {
    console.log(`Server is running at port 3000.`);
});