import usersmodal from "../models/userModals.js";
import bcrypt from "bcryptjs";
import nodemailer from "nodemailer";
import Jwt from "jsonwebtoken";
import { json } from "express";

export const registergenrteOtpHandler = async (req, res, next) => {
  let { Email } = req.body;
console.log(req.body);
  const otp = Math.floor(Math.random() * 100000);

  try {
    const userExist = await usersmodal.findOne({ Email });
    if (userExist) {
      res.status(208).json({ statuscode: true, message: "Email already exists", userExist: true });
    } else {
      // const HashPassword = bcrypt.hashSync(password, 12);

      // let User = new users({
      //   UserName,
      //   Email,
      //   Number,
      //   password: HashPassword,
      // });
      // User = await User.save();
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "muhammedfayisthangal@gmail.com",
          pass: "qanpljdjpijpatkc",
        },
      });
      transporter.sendMail(
        {
          from: "2muhammedfayisthangal@gmail.com", // sender address
          to: `${Email}`, // list of receivers
          subject: "Hello ✔", // Subject line
          text: ` your One-time OTP  ${otp} `, // plain text body
        },

        (error, info) => {
          if (error) {
            console.log(error);
          } else {
            console.log(info.response);
            console.log("sented otp is ", otp);
            const HashOtp = bcrypt.hashSync(toString(otp), 12);
            res.status(201).json({ otpsent: true, message: `send otp ${Email}`, otp: HashOtp });
          }
        }
      );
    }
  } catch (error) {
    throw new Error(error);
  }
};

export const otpverifyingHandler = async (req, res, next) => {
  // res.status(204).json({ message: "please enter all fields" });
  console.log(req.body);

  const { otpHash, Otp, UserName, Email, Number, password } = req.body;
  // res.status(200).json({ message: "please enter all fields" });

  if (!UserName && !Email && !Number && !password) {
    return res.status(200).json({ message: "please enter all fields" });
  } else if (!otpHash) {
    return res.status(404).json({ message: "resent otp !! Try again" });
  } else if (!Otp) {
    return res.status(404).json({ message: "pleace ender one time password(OTP)" });
  } else if (!bcrypt.compare(Otp, otpHash)) {
    return res.status(203).json({ message: "OTP not mach tey again" });
  } else {
    const HashPassword = bcrypt.hashSync(password, 10);

    let users = new usersmodal({
      UserName,
      Email,
      password: HashPassword,
      Number,
    });

    try {
      users = await users.save();
      // const UserdbID = users._id;
      // const Token = Jwt.sign({ UserdbID }, process.env.JWT_SECRET, { expiresIn: "1h" });
      res
        .status(200)
        // .cookie("token", String(Token), { maxAge: 100000 })
        .json({ message: "Registration succuss fully" }),
        next();
    } catch (error) {
      console.log("server err", error);
    }
  }
};
export const loginHandler = async (req, res) => {
  const { Email, password } = req.body;
  const UsEmailExist = await usersmodal.find({ Email: Email });
  if (!UsEmailExist) {
    return res.status(403).json({ message: "Invalid Email , please enter a valid email or register with the email" });
  }
 
  let MachPassword = bcrypt.compareSync(password, UsEmailExist[0].password);
  console.log("MachPassword", MachPassword);

  const userID = UsEmailExist[0]._id;
  console.log("userID", userID);
  const Token = Jwt.sign({ userID }, process.env.JWT_SECRET, { expiresIn: "1h" });
  return res.status(200).cookie("token", String(Token), { maxAge: 100000000 }).json({ message: "login Succuss fully" });
};

// Middleware

export const authenticationMiddleware = async (req, res, next) => {
  console.log("request authentication", req.cookie);
};
