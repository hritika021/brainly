import mongoose from "mongoose";
const connect=async()=>{
    try{
        await mongoose.connect(process.env.DATABASE_URL!);
       
    }

    catch(err){
        console.error(err)
    }
}
export default connect;
