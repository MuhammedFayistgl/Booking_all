
import jwt from 'jsonwebtoken'
import user from '../models/userModals.js';



/** auth middleweare */
export const protect = async (req,res,next) => {
// console.log(req.username);
// console.log(req.headers.authorization.split(' ')[1]);
// console.log(req.headers.authorization.startsWith('Bearer'));
try {
    if(req.headers.authorization&&req.headers.authorization.startsWith('Bearer')){
       
        try {
           
            let tocken = req.headers.authorization.split(' ')[1]
            console.log('tocken',tocken);
            const decoded = await jwt.verify(tocken,process.env.SECRET_KEY)
            console.log('decoded',decoded);
            req.user = await user.findById(decoded.id)
            console.log(' req.user', req.user);
        next()    
        } catch (error) {
            console.log(error);
        }
    }
   
} catch (error) {
    console.log(error);
}
}