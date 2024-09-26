import express from "express";
import mongoose from "mongoose";
import dbConfig from "./config/db.config.js";


mongoose
  .connect(dbConfig.DB_URL)
  .then(() => {
    console.log("mongoDb is connected");
  })
  .catch((err) => {
    console.log("err");
  });

  const app = express();

app.listen(3000, () => {
  console.log("server is running on port 3000!!");
});
