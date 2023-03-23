import express from "express";
import mongoose from "mongoose";
require("dotenv").config();

const app = express();

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.yr7ugsu.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => console.log("✅ Server connected to mongoDB Atlas successfully"))
  .catch(() => console.log("❌ Error connecting to mongoDB Atlas"));

const port = 3001;
app.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});
