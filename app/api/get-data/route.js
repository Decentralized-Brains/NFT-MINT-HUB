import { connectToDB } from "@middleware/connectDB.js";
import Collection from "@models/tokens";



export const config = {
  api: {
    bodyParser: false,
  }
}



export const POST = async (request, res) => {

  const procesDate=(sDate, eDate)=>{
    // process startDate 
    let procDate = new Date(sDate)
    let options = { month: 'long' };
    let smonthName = procDate.toLocaleString('en-US', options);
    let sday = procDate.getDate();
    let syear = procDate.getFullYear();

    // process endDate 
    let procEDate = new Date(eDate)
    options = { month: 'long' };
    let emonthName = procEDate.toLocaleString('en-US', options);
    let eday = procEDate.getDate();
    let eyear = procEDate.getFullYear();

    let endDate = emonthName+" "+eday+" "+eyear
    let startDate = smonthName+" "+sday+" "+syear
    return { startDate, endDate }

  }


  
  try {
    await connectToDB()
    const response = await request.formData()
    let mainImage = response.get("mainImage")
    let logo = response.get("logo")
    let image1 = response.get("image1")
    let image2 = response.get("image2")
    let image3 = response.get("image3")
    let name = response.get("name")
    let description = response.get("description")
    let sDate = response.get("startDate")
    let eDate = response.get("endDate")
    let dateResult = procesDate(sDate,eDate)
    let platform = response.get("platform")
    let mintPrice = response.get("mintPrice")
    let reSalePrice = response.get("reSalePrice")
    let collectionSize = response.get("collectionSize")
    let website = response.get("website")
    let discordLink = response.get("discordLink")
    let twitterLink = response.get("twitterLink")
    let telegramLink = response.get("telegramLink")
    let openSeaLink = response.get("openSeaLink")

    if (mainImage) {
      const b = await mainImage.arrayBuffer();
      const buff = Buffer.from(b);
      const base64 = buff.toString('base64')
      mainImage = `data:image/jpeg;base64,${base64}`
    }
    if (logo) {
      const b = await logo.arrayBuffer();
      const base64 = Buffer.from(b).toString('base64')
      logo = `data:image/jpeg;base64,${base64}`
    }
    if (image1) {
      const b = await image1.arrayBuffer();
      const buff = Buffer.from(b);
      const base64 = buff.toString('base64')
      image1 = `data:image/jpeg;base64,${base64}`
    }
    if (image2) {
      const b = await image2.arrayBuffer();
      const buff = Buffer.from(b);
      const base64 = buff.toString('base64')
      image2 = `data:image/jpeg;base64,${base64}`
    }
    if (image3) {
      const b = await image3.arrayBuffer();
      const buff = Buffer.from(b);
      const base64 = buff.toString('base64')
      image3 = `data:image/jpeg;base64,${base64}`
    }

    const saveDataToDataBase ={
      name,
      description,
      startDate:dateResult.startDate,
      endDate:dateResult.endDate,
      platform,
      mintPrice,
      reSalePrice,
      collectionSize,
      website,
      discordLink,
      twitterLink,
      telegramLink,
      openSeaLink,
      mainImage,
      logo,
      image1,
      image2,
      image3
    }
    const dd =  new Collection(saveDataToDataBase)
    await dd.save();
    console.log("Data Saved!!!!")
    return new Response({ status: 200 });
  } catch (error) {
    console.log(error);
  }
};