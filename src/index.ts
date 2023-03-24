import express from "express";
import mongoose from "mongoose";
import { router } from "./router";
require("dotenv").config();

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASSWORD}@cluster0.yr7ugsu.mongodb.net/?retryWrites=true&w=majority`
  )
  .then(() => {
    const app = express();

    app.use(express.json());
    app.use(router);

    const port = process.env.PORT || 3001;
    app.listen(port, () => {
      console.log(
        `✅ Server connected to mongoDB Atlas successfully \n🚀 Server is running on http://localhost:${port}`
      );
    });
  })
  .catch(() =>
    console.log(
      "❌ Error connecting to mongoDB Atlas\n❌ Server is not running"
    )
  );
