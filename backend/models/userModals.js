import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  username: {
    type: "string",
    required: true,
  },
  password: {
    type: "string",
    required:true,
  },
});
const user = mongoose.model('Users',userSchema)
export default user