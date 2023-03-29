import  express from 'express'
import {getdatas, uplodeDatabace ,deletOnedata} from '../controller/adminadditems.js'




const router = express.Router()
router.post("/uplodehotelDeteals",uplodeDatabace)
router.get("/getallDeteals",getdatas)
router.post("/deleteoneDeteals",deletOnedata)

export default router
