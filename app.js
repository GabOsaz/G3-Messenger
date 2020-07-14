import express from "express";
import { config } from "dotenv";
config();
import mongoose from "mongoose";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import userRoutes from './routes/userRoutes';
import groupRoutes from './routes/groupRoutes';

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
app.use(cookieParser());

app.use('/', userRoutes);
app.use('/api/groups', groupRoutes);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server started on port " + port));
