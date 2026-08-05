import mongoose from "mongoose";
const connect=async()=>{
    try{
        await mongoose.connect('mongodb://localhost:27017/brainly')
       
    }

    catch(err){
        console.error(err)
    }
}
export default connect;
