import mongoose from "mongoose";


const Url = 'mongodb://127.0.0.1:27017'
const connution = async () => {
  try {
   mongoose.set('strictQuery', true)
     mongoose.connect(Url, {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    });
    
    
    console.log(`Mongodb connection established ${Url}`);
  } catch (error) {
    console.log("connuction Erorr",error);
    process.exit(1);
  }
};


export default connution;
