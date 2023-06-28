
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
            console.log('Middlwer passed Successfully')
            req.userID=decoded.userID
            next()
        } else {
            console.log('Unauthorized  requst ! ')
            return res.status(401).json({
                errorcode: 1,
                status: true,
                message: 'User not found . please Login up..',
                isLogdin: false,
            });
        }
    } catch (error) {
        console.log(error);
    }
}