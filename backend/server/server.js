import mongoose from "mongoose";


const connution = async () => {
  try {
    mongoose.set('strictQuery', true)
    mongoose.connect(process.env.URL_MONGODB, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });


    console.log(`Mongodb connection established`);
  } catch (error) {
    console.log("connuction Erorr", error);
    process.exit(1);
  }
};


export default connution;
