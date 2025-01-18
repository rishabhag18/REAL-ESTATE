import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import listingRouter from "./routes/listing.route.js";
import path from 'path';

dotenv.config();

//mongoDB connection
mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Database Connected");
}).catch((err)=>{
    console.log(err);
})

const _dirname = path.resolve();
//express app connection
const app = express();
const port = process.env.PORT || 3000;
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
app.listen(port, () => {
    console.log(`Server is running at port 3000.`);
});


//test api route
app.use('/api/user',userRouter);
//signup post api route
app.use('/api/auth',authRouter);
//listing Route for property listing
app.use('/api/listing',listingRouter);

app.use(express.static(path.join(_dirname,'/client/dist')));

app.get('*',(req,res)=>{
    res.sendFile(path.join(_dirname,'client','dist','index.html'));
})

app.use((err,req,res,next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message,
    });
});
