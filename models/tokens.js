import mongoose, { Schema, model, models } from "mongoose";

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
    descordLink:{
        type: String  
    },
    openSeaLink:{
        type: String  
    },
    telegramLink:{
        type: String  
    },
    twitterLink:{
        type: String  
    },
    website:{
        type: String
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

const Collection = models.Collection || mongoose.model("Collection", CollectionShema);

export default Collection;