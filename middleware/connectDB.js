import mongoose from "mongoose";


let isConnected = false
export const connectToDB = async () => {
    mongoose.set('strictQuery', true);
  
    if(isConnected) {
      console.log('MongoDB is already connected');
      return;
    }

    try {
      await mongoose.connect('mongodb+srv://alfazsozib:whWLSQmiL5qjC7KV@mint.opmiy5n.mongodb.net/?retryWrites=true&w=majority', {
        dbName: "mintHub",
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
  
      isConnected = true;
  
      console.log('MongoDB connected')
    } catch (error) {
      console.log(error);
    }
  }