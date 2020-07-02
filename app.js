import express from "express";
import { config } from "dotenv";
config();
import mongoose from "mongoose";
import morgan from "morgan";
import userRoute from './routes/userRoutes';

mongoose
  .connect(process.env.DB_USERNAME, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() =>
    console.log("Database successfully connected on " + process.env.DB_USERNAME)
  )
  .catch(err => console.log(err));



const app = express();
app.use(morgan("tiny"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', userRoute);



const port = process.env.PORT || 5000;
app.listen(port, () => console.log("Server staerted on URL " + port));
