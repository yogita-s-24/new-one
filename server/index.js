import express from 'express'
import mongoose from 'mongoose'
import dotevn from 'dotenv'

dotevn.config();

const app = express();
app.use(express.json());


const connectDB = () =>{
    const conn = mongoose.connect(process.env.MONGO_URI);

    if(conn){
        console.log("MongoDb Connected Successfully.")
    }
}

connectDB();

const PORT = process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
})
