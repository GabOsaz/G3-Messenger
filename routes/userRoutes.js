import User from "../models/userModel";
import { Router } from "express";
import { hashPassword, verifyPassword, createToken } from './util.js'

const router = Router();

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
    const hashed = await hashPassword(req.body.password);
    console.log(hashed);
    const user = new User({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: hashed
    });

    const existingEmail = await User.findOne({
      email: user.email
    }).lean();

    if (existingEmail) {
      return res
        .status(400)
        .json({ message: 'Email already exists' });
    }

    return user
      .save()
      .then(newUser => res.status(200).json({ message: newUser }))
        .catch(err => res.status(420).json({error: err}))
  } catch (error) {
    console.error();
    return next(error);
  }
});

router.post('/api/user/authenticate', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({
      email
    }).lean();

    if (!user) {
      return res.status(403).json({
        message: 'Wrong email or password.'
      });
    }

    const passwordValid = await verifyPassword(
      password,
      user.password
    );

    if (passwordValid) {
      const { password, ...rest } = user;
      const userInfo = Object.assign({}, { ...rest });

      const token = createToken(userInfo);

      // const decodedToken = jwtDecode(token);
      // const expiresAt = decodedToken.exp;

      res.cookie('token', token, {
        httpOnly: true
      })

      res.json({
        message: 'Authentication successful!',
        token,
        userInfo
      });
    } else {
      res.status(403).json({
        message: 'Wrong email or password.'
      });
    }
  } catch (err) {
    console.log(err);
    return res
      .status(400)
      .json({ message: 'Something went wrong.' });
  }
});


export default router;
