import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  UserName: {
    type: "string",
    required: [true,'please enter a username'],
  },
  Email:{
    type: 'string',
    required: [true, 'Enter an email address.'],
    unique: [true, 'That email address is taken.'],
  },
  password: {
    type: "string",
    required:[true,'please enter a password'],
  },
  Number:{
    type: "number",
    require:true,

  }
});
const users = mongoose.model('registeruser',userSchema)
export default users