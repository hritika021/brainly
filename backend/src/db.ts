import mongoose from "mongoose";
const connect=async()=>{
    try{
          console.log("DATABASE_URL exists:", !!process.env.DATABASE_URL);
        await mongoose.connect(process.env.DATABASE_URL!);
        console.log("Connected to mongodb")
       
    }

    catch(err){
        console.error("Mongodb connecttion error",err)
    }
}
export default connect;
