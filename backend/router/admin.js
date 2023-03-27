import  express from 'express'
import {getdatas, uplodeDatabace} from '../controller/adminadditems.js'




const router = express.Router()
router.post("/uplodehotelDeteals",uplodeDatabace)
router.get("/uplodehotelDeteals",getdatas)

export default router
