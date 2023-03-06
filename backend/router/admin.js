import  express from 'express'
const router = express.Router()

import {uplodeDatabace} from '../controller/adminadditems.js'


router.post("/uplodehotelDeteals",uplodeDatabace)

export default router