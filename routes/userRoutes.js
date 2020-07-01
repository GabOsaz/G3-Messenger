import mongoose from "mongoose";
import User from "../models/userModel";
import { Router } from "express";
const router = Router();
import bcrypt from 'bcryptjs';

router.get("/user", async (req, res, next) => {
  //  get route list all the user in the db
  try {
    const fetch = await User.find();
    return res.status(200).json({
      message: fetch,
      status: 200
    });
  } catch (error) {
    console.log(error);
    return next(error);
  }
});

router.post("/api/user/signup", async (req, res, next) => {
  try {
    const hashed = await bcrypt.hash(req.body.password)
    const user = new User({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: hashed
    });

    return user
      .save()
      .then(newUser => res.status(200).json({ message: newUser }))
        .catch(err => res.status(420).json({error: err}))
  } catch (error) {
    console.log(console.error());
    return next(error);
  }
});
export default router;
