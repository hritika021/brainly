import mongoose from "mongoose";
const connect=async()=>{
    try{
        await mongoose.connect(process.env.DATABASE_URL!);
        console.log("Connected to mongodb")
       
    }

    catch(err){
        console.error("Mongodb connecttion error",err)
    }
}
export default connect;
