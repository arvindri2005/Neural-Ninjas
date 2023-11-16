import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();

const generateToken = (_id) => {
    return jwt.sign({_id},(process.env.JWT_SECRET))
};

export default generateToken;