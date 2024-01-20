import express from "express";
import mongoose from "mongoose";
import dotevn from "dotenv";

dotevn.config();

import Mytodos from "./model/Mytodos.js";

const app = express();
app.use(express.json());

app.get("/healths", async (req, res) => {
  res.send("Health is ok");
});

app.post("/api/v1/todos", async (req, res) => {
  const {title, description, state } = req.body;

  const todos = new Mytodos({
    title,
    description,
    state,
  })

  try {
    const savetodoData = await Mytodos.save();
    res.json({
      success: true,
      data: savetodoData,
      message: err,
    })

  } catch (err) {
    res.json({
      success: false,
      message: err,
    });
  }
});

const connectDB = () => {
  const conn = mongoose.connect(process.env.MONGO_URI);

  if (conn) {
    console.log("MongoDb Connected Successfully.");
  }
};

connectDB();

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
