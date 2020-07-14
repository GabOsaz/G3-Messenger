import jwt from 'express-jwt';
import { config } from "dotenv";
config();

const checkJwt = jwt({
    secret: process.env.JWT_SECRET,
    algorithms: ['HS256'],
    getToken: req => req.cookies.token
})

export default checkJwt;