import mongoose, { Schema, model } from "mongoose";

const CollectionShema = new Schema({
    name:{
        type: String,
    },
    description: {
        type: String,
    },
    startDate: {
        type: String
    },
    endDate: {
        type: String 
    },
    platform: {
        type: String
    },
    mintPrice: {
        type: Number
    },
    reSalePrice: {
        type: Number
    },
    collectionSize: {
        type: Number 
    },
    logo: {
        type: String
    },
    mainImage: {
        type: String 
    },
    image1: {
        type: String 
    },
    image2: {
        type: String 
    },
    image3: {
        type: String
    }
})

const CollectionModel = mongoose.model("collection", CollectionShema);
export default CollectionModel;