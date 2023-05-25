import { connectToDB } from "@middleware/connectDB.js";
import Collection from "@models/tokens";
import path from "path";


export const config ={
    api:{
        bodyParser:false,
    }
}



export const POST = async (request,res) => {
    
  try {
    const response = await request.formData()
    const image = response.get("mainImage")
    const b = await image.arrayBuffer();
    const buff = Buffer.from(b);
    const base64 = buff.toString('base64')
    console.log(`data:image/jpeg;base64,${base64}`)
    return new Response(JSON.stringify({name:""}), { status: 200 });
  } catch (error) {
    console.log(error);
  }
};