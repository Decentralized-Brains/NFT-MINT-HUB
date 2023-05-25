import { connectToDB } from "@middleware/connectDB.js";
import Collection from "@models/tokens";

export const GET = async (request) => {
  try {
    await connectToDB();
    const response = await Collection.find({}); // Call find() on the instantiated model
    return new Response(JSON.stringify(response), { status: 200 });
  } catch (error) {
    console.log(error);
  }
};