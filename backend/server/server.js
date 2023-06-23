import mongoose from "mongoose";


const Url = process.env.URL_MONGODB
const connution = async () => {  
  try {
   mongoose.set('strictQuery', true)
     mongoose.connect( process.env.URL_MONGODB, {
        useNewUrlParser: true, 
        useUnifiedTopology: true
    });
    
    
    console.log(`Mongodb connection established ${ process.env.URL_MONGODB}`);
  } catch (error) {
    console.log("connuction Erorr",error);
    process.exit(1);
  }
};


export default connution;
