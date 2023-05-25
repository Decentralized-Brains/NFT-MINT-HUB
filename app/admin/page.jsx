'use client'
import React from 'react'
import { useState } from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";



function Admin() {
  const [inputs, setInputs] = useState(null);
  const [file, setFile]  = useState(null);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());



  const handlePhotos = (event) => {
    const name = event.target.name
    setFile({ ...file, [name]: event.target.files[0] });
  }

  const handeSubmit = (event) => {
    console.log(event.target.value)
    const name = event.target.name;
    const value = event.target.value
    setInputs({...inputs, [name]:value})
  }

  const postData=async(event)=>{
    try {
      const formData = new FormData()
      formData.append("name",inputs.name)
      formData.append("description",inputs.description)
      formData.append("startDate",startDate)
      formData.append("endDate",endDate)
      formData.append("platform",inputs.platform)
      formData.append("mintPrice",inputs.mintPrice)
      formData.append("reSalePrice",inputs.reSalePrice)
      formData.append("collectionSize",inputs.collectionSize)
      formData.append("website",inputs.website)
      formData.append("discordLink",inputs.discordLink)
      formData.append("twitterLink",inputs.twitterLink)
      formData.append("telegramLink",inputs.telegramLink)
      formData.append("openSeaLink",inputs.openSeaLink)
      formData.append("logo",file.logo)
      formData.append("mainImage",file.mainImage)
      formData.append("image1",file.image1)
      formData.append("image2",file.image2)
      formData.append("image3",file.image3)
      console.log(formData)
      

      const response = await fetch("/api/get-data", {
        method: "POST",
        body:formData
      });
      console.log(await response.json())
    } catch (error) {
      console.log(error);
  }
}

  return (
    <div className="admin-panel">
      <div className='w-[100%]'>
        <h1 className='text-center text-6xl py-6'>Admin Dasboard</h1>
      </div>
      <div >
        <form action="">
          <div className='grid grid-cols-4 p-4 gap-4'>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="name"
                className="placeholder-transparent focus:placeholder-gray-500 block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-[#cccccc] appearance-none dark:text-black  dark:focus:border-[#FCC607] focus:outline-none focus:ring-0 focus:border-[#FCC607] peer"
                placeholder="ex: Mytoken"
                onChange={handeSubmit}
              />
              <label
                htmlFor="floating_first_name"
                className="peer-focus:font-medium absolute text-base text-black  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FCC607] peer-focus:dark:text-[#FCC607] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Name
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="number"
                name="mintPrice"
                className="placeholder-transparent focus:placeholder-gray-500 block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-[#cccccc] appearance-none dark:text-black  dark:focus:border-[#FCC607] focus:outline-none focus:ring-0 focus:border-[#FCC607] peer"
                placeholder="0.1 ..."
                onChange={handeSubmit}
              />
              <label
                htmlFor="floating_first_name"
                className="peer-focus:font-medium absolute text-base text-black  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FCC607] peer-focus:dark:text-[#FCC607] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Mint Price
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="number"
                name="reSalePrice"
                className="placeholder-transparent focus:placeholder-gray-500 block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-[#cccccc] appearance-none dark:text-black  dark:focus:border-[#FCC607] focus:outline-none focus:ring-0 focus:border-[#FCC607] peer"
                placeholder="0.1 ..."
                onChange={handeSubmit}
              />
              <label
                htmlFor="floating_first_name"
                className="peer-focus:font-medium absolute text-base text-black  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FCC607] peer-focus:dark:text-[#FCC607] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Re Sale Price
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="number"
                name="collectionSize"
                className="placeholder-transparent focus:placeholder-gray-500 block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-[#cccccc] appearance-none dark:text-black  dark:focus:border-[#FCC607] focus:outline-none focus:ring-0 focus:border-[#FCC607] peer"
                placeholder="10000"
                onChange={handeSubmit}
              />
              <label
                htmlFor="floating_first_name"
                className="peer-focus:font-medium absolute text-base text-black  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FCC607] peer-focus:dark:text-[#FCC607] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Collection Size
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="website"
                className="placeholder-transparent focus:placeholder-gray-500 block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-[#cccccc] appearance-none dark:text-black  dark:focus:border-[#FCC607] focus:outline-none focus:ring-0 focus:border-[#FCC607] peer"
                placeholder="http://"
                onChange={handeSubmit}
              />
              <label
                htmlFor="floating_first_name"
                className="peer-focus:font-medium absolute text-base text-black  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FCC607] peer-focus:dark:text-[#FCC607] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Website
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="discordLink"
                className="placeholder-transparent focus:placeholder-gray-500 block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-[#cccccc] appearance-none dark:text-black  dark:focus:border-[#FCC607] focus:outline-none focus:ring-0 focus:border-[#FCC607] peer"
                placeholder="http://"
                onChange={handeSubmit}
              />
              <label
                htmlFor="floating_first_name"
                className="peer-focus:font-medium absolute text-base text-black  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FCC607] peer-focus:dark:text-[#FCC607] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Discord Link
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="openSeaLink"
                className="placeholder-transparent focus:placeholder-gray-500 block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-[#cccccc] appearance-none dark:text-black  dark:focus:border-[#FCC607] focus:outline-none focus:ring-0 focus:border-[#FCC607] peer"
                placeholder="http://"
                onChange={handeSubmit}
              />
              <label
                htmlFor="floating_first_name"
                className="peer-focus:font-medium absolute text-base text-black  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FCC607] peer-focus:dark:text-[#FCC607] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                OpenSea Link
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="twitterLink"
                className="placeholder-transparent focus:placeholder-gray-500 block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-[#cccccc] appearance-none dark:text-black  dark:focus:border-[#FCC607] focus:outline-none focus:ring-0 focus:border-[#FCC607] peer"
                placeholder="http://"
                onChange={handeSubmit}
              />
              <label
                htmlFor="floating_first_name"
                className="peer-focus:font-medium absolute text-base text-black  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FCC607] peer-focus:dark:text-[#FCC607] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Twitter Link
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
              <input
                type="text"
                name="telegramLink"
                className="placeholder-transparent focus:placeholder-gray-500 block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-[#cccccc] appearance-none dark:text-black  dark:focus:border-[#FCC607] focus:outline-none focus:ring-0 focus:border-[#FCC607] peer"
                placeholder="http://"
                onChange={handeSubmit}
              />
              <label
                htmlFor="floating_first_name"
                className="peer-focus:font-medium absolute text-base text-black  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FCC607] peer-focus:dark:text-[#FCC607] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Telegram Link
              </label>
            </div>
            <div className="relative z-0 w-full mb-6 group">
             <DatePicker name='startDate' selected={startDate} onChange={(sdate) => setStartDate(sdate)} />
            </div>

            <div className="relative z-0 w-full mb-6 group">
             <DatePicker name='endDate' selected={endDate} onChange={(edate) => setEndDate(edate)} />
            </div>
      
            <div className="relative z-0 w-full mb-6 group">
              <select
                onChange={handeSubmit}
                name="platform"
                className="placeholder-transparent focus:placeholder-gray-500 block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-[#cccccc] appearance-none dark:text-black  dark:focus:border-[#FCC607] focus:outline-none focus:ring-0 focus:border-[#FCC607] peer"
              >
                <option value="">Please Select Network</option>
                <option value="ethereum">Ethereum</option>
                <option value="polygon">Polygon</option>
                <option value="solana">Solana</option>
                <option value="cardano">Cardano</option>
              </select>
            </div>

            <div className="relative z-0 w-full mb-6 group">
              <textarea
                type="text"
                name="description"
                className="placeholder-transparent focus:placeholder-gray-500 block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-[#cccccc] appearance-none dark:text-black  dark:focus:border-[#FCC607] focus:outline-none focus:ring-0 focus:border-[#FCC607] peer"
                placeholder="write a description about the project..."
                cols={10}
                rows={10}
                onChange={handeSubmit}

              />
              <label
                htmlFor="floating_first_name"
                className="peer-focus:font-medium absolute text-base text-black  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-[#FCC607] peer-focus:dark:text-[#FCC607] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Description
              </label>
            </div>

            <div>
              <div>
                <label
                  className="block mb-2 text-sm font-medium text-black dark:text-black"
                  htmlFor="file_input"
                >
                  Upload Main Image
                </label>
                <input
                  className="placeholder-transparent focus:placeholder-gray-500 block w-full text-base text-black border border-[#cccccc] rounded-lg cursor-pointer  focus:outline-none"
                  id="file_input"
                  type="file"
                  name='mainImage'
                  onChange={handlePhotos}
                  accept="image/*,video/*"
                />
              </div>
              <div>
                <label
                  className="block mb-2 text-sm font-medium text-black dark:text-black"
                  htmlFor="file_input"
                >
                  Upload Image 1
                </label>
                <input
                  className="placeholder-transparent focus:placeholder-gray-500 block w-full text-base text-black border border-[#cccccc] rounded-lg cursor-pointer  focus:outline-none"
                  id="file_input"
                  type="file"
                  name='image1'
                  onChange={handlePhotos}
                  accept="image/*,video/*"
                />
              </div>
              <div>
                <label
                  className="block mb-2 text-sm font-medium text-black dark:text-black"
                  htmlFor="file_input"
                >
                  Upload Image 2
                </label>
                <input
                  className="placeholder-transparent focus:placeholder-gray-500 block w-full text-base text-black border border-[#cccccc] rounded-lg cursor-pointer  focus:outline-none"
                  id="file_input"
                  type="file"
                  name='image2'
                  onChange={handlePhotos}
                  accept="image/*,video/*"
                />
              </div>
              <div>
                <label
                  className="block mb-2 text-sm font-medium text-black dark:text-black"
                  htmlFor="file_input"
                >
                  Upload Image 3
                </label>
                <input
                  className="placeholder-transparent focus:placeholder-gray-500 block w-full text-base text-black border border-[#cccccc] rounded-lg cursor-pointer  focus:outline-none"
                  id="file_input"
                  type="file"
                  name='image3'
                  onChange={handlePhotos}
                  accept="image/*,video/*"
                />
              </div>
              <div>
                <label
                  className="block mb-2 text-sm font-medium text-black dark:text-black"
                  htmlFor="file_input"
                >
                  Upload Logo
                </label>
                <input
                  className="placeholder-transparent focus:placeholder-gray-500 block w-full text-base text-black border border-[#cccccc] rounded-lg cursor-pointer  focus:outline-none"
                  id="file_input"
                  type="file"
                  name='logo'
                  onChange={handlePhotos}
                  accept="image/*,video/*"
                />
              </div>
            </div>
          </div>
          
        </form>
        <div>
          <button type='button' onClick={postData}>Sumbit</button>
          </div>
      </div>
      <div>
      </div>
    </div>
  )
}

export default Admin
