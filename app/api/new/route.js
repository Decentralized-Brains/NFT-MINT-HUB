import { connectToDB } from "@middleware/connectDB.js"
import CollectionModel from "@models/Collections"

export const GET = async (request) => {
    try {
        await connectToDB();
        const newCollection = new CollectionModel({name:"Alfaz"})
        await newCollection.save()
        return new Response({ status: 200 })
    } catch (error) {
        return new Response(error, { status: 500 })
    }
} 
