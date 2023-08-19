import jwt from 'jsonwebtoken';
import {NextFunction, Request, Response} from "express";
import {config} from "dotenv";

config();
const JWT_SECRET = process.env.JWT_SECRET as string;

export const verify = (req:Request, res: Response, next: NextFunction) => {
    const token = req.cookies.auth;
    console.log(req.cookies);
    console.log(token);
    if (token == null) {
        return res.status(401)
            .send('Unauthorized');
    }
    jwt.verify(token, JWT_SECRET, {}, (err, user) => {
        if (err) {
            return res.sendStatus(403);
        }
        next();
    });
};

// const restrictTo = (...roles) => {
//     return (req, res, next) => {
//         if (!roles.includes(req.user.userType)) {
//             return res.status(403).json('You do not have permission ot perform this action');
//         }
//         next();
//     }
// };

// module.exports = {verify, restrictTo};
