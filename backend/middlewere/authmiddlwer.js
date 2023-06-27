
import jwt from 'jsonwebtoken'
import user from '../models/userModals.js';



/** auth middleweare */
export const authentcationMiddlwer = async (req, res, next) => {


    try {
        let cookies = {};
        const cookiesArray = req.headers.cookie.split(';');
        cookiesArray.forEach((cookie) => {
            const [key, value] = cookie.trim().split('=');
            cookies[key] = value;
        });
        const token = cookies?.token
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        if (decoded.userID) {
            console.log('decoded', decoded)
            res.status(200).json({
                errorcode: 0,
                status: true,
                message: 'Login successful',
                isLogdin: true,
                userID: decoded.userID,
                expire: decoded.exp
            });
            req.userID = decoded.userID;
            next()
        } else {
            return res.status(401).json({
                errorcode: 0,
                status: false,
                message: 'user not found . please Sign up..',
                isLogdin: true,
            });
        }
    } catch (error) {
        console.log(error);
    }
}