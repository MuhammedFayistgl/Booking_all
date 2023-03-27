import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import connutionDB from "./server/server.js";
import userRouter  from './router/router.js'
import adminRouter from './router/admin.js';

const app = express();
app.use(cors());
app.use(express.json());
 dotenv.config();

connutionDB();


app.get('/',(req,res)=>{
  res.send("welcome to node js ");
})
app.use('/user',userRouter)
app.use('/admin',adminRouter)


app.listen(process.env.PORT || 8000, () => {
  console.log(`nodes listening on port${process.env.PORT} `);
  console.log();
});



  



