import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import connutionDB from "./server/server.js";
import userRouter from "./router/router.js";
import adminRouter from "./router/admin.js";
import fs from 'fs'
import path from 'path'
import bodyParser from "body-parser";



const app = express();

app.use(cors());
// app.use(express.json());
app.use(bodyParser.json({extended: false}));
app.use(bodyParser.json());
app.use(express.static('public'));
dotenv.config();
connutionDB();


console.log( path.dirname(''))

app.get("/", (req, res) => {
  res.send("welcome to node js ");
});
app.use("/user", userRouter);
app.use("/admin", adminRouter);

app.listen(process.env.PORT || 8000, () => {
  console.log(`nodes listening on port${process.env.PORT} `);
  console.log();
});
