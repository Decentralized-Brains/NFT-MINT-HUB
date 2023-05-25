import { connectToDB } from "@middleware/connectDB.js";
import Collection from "@models/tokens";

export const POST = async (request,res) => {
  try {
    const response = await request.formData()
    console.log(response.get('mainImage'))
    return new Response(JSON.stringify({name:""}), { status: 200 });
  } catch (error) {
    console.log(error);
  }
};