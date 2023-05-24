import mongoose from "mongoose";


const connectDataBase = async (handler) =>{
    if(mongoose.connections[0].readyState){
        return handler(req,res);
    }

    await mongoose.connect(process.env.MONGODB_URL)
    return handler(req,res);
}

export default connectDataBase;