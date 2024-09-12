import jwt from "jsonwebtoken"
import { config } from "../config/env.js"

export const generateToken = (userdetails) => {

    const token = jwt.sign(userdetails, config.auth.accessTokenSecretKey, {expiresIn: config.auth.accessTokenExpire})

    return token;
}