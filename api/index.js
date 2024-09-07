import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
//const mongoURI= "mongodb+srv://shaibalpatra7:dRoaxvDP1MBsQrHK@cluster0.wrc1vh3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
mongoose.connect(process.env.MONGO).then(()=>{
    console.log("Database Connected");
}).catch((err)=>{
    console.log(err);
})
const app = express();

app.listen(3000, () => {
    console.log(`Server is running at port 3000.`);
})