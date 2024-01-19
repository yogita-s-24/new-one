import express from 'express'
import mongoose from 'mongoose'
import dotevn from 'dotenv'

dotevn.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT;

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`);
})
