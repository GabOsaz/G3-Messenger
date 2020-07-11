import express from "express";
import { config } from "dotenv";
config();
import mongoose from "mongoose";
import morgan from "morgan";
import userRoute from './routes/userRoutes';
import cookieParser from "cookie-parser";

mongoose
  .connect(process.env.ATLAS_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() =>
    console.log("Database successfully connected to " + process.env.ATLAS_URL)
  )
  .catch(err => console.log(err));

const app = express();
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', userRoute);
app.use(cookieParser());

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server started on port " + port));
