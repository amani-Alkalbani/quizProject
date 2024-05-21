

import express from "express";

import dotenv from 'dotenv';
import connectDB from "./config/db.js";
import userRoutes from "./routes/userRoutes.js";
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

import cors from 'cors';
import bodyParser from "body-parser";




// app.get("/api/notes", (req, res) => {
//   res.json(notes)
// });





dotenv.config();



connectDB();

const app = express(); // main thing

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});


app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running..");


});

app.use("/api/users", userRoutes);


app.use(notFound);
app.use(errorHandler);






const PORT = process.env.POR || 5000;


app.listen(
  PORT,
    console.log(
      `Server running in ${PORT} `
     
    )
  );