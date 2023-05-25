'use client'

import React, { useEffect } from "react";
import Image from "next/image";
import { socialsData } from "./Data";
import { useState } from "react";
import Link from "next/link";

const Card = ({filterOption}) => {
  const [tokens, setTokens] = useState(null);
console.log(filterOption)
  const getAllCollection = async () => {
    const response = await fetch("api/send-data", { method: "GET" })
    const result = await response.json()    
    console.log(result)
    const filteredTokens = result.filter(item => item.platform === filterOption.toLowerCase());
    setTokens(filteredTokens)
    console.log(tokens)
  }



  
  useEffect(() => {
    getAllCollection()
  }, [filterOption])

 

  return (
    <div className="glassmorphism w-full  my-5 ">
      {tokens ? tokens.map((item, index) =>
        <div className="flex flex-col lg:flex-row justify-between gap-5">
          <div className="md:w-1/3">
            <Image
              src={item?.logo}
              alt="NFT Store Logo"
              width={200}
              height={200}
              className="object-cover"
            />

            <div>
              <h5 className="text-xl font-bold">{item?.name} </h5>
              <h6 className="text-sm">{item?.startDate} – {item?.endDate}</h6>
            </div>

            <div className="my-2 font-medium">
              <p>
                Platform: <span className="text-orange-800">{item?.platform}</span>
              </p>
              <p>
                Mint Price: <span className="text-orange-500">{item?.mintPrice}</span>
              </p>
              <p>
                Re sale Price: <span className="text-orange-500">{item?.reSalePrice}</span>
              </p>
              <p>
                Collection Size: <span className="text-orange-500">{item?.collectionSize}</span>
              </p>
            </div>

            <div className="flex gap-3 items-center">
              <Image
                src={socialsData[0]['img']['src']}
                alt={''}
                width={25}
                height={25}
                className="object-cover"
              />
              <Image
                src={socialsData[1]['img']['src']}
                alt={''}
                width={25}
                height={25}
                className="object-cover"
              />
              <Image
                src={socialsData[2]['img']['src']}
                alt={''}
                width={25}
                height={25}
                className="object-cover"
              />
              <Image

                src={socialsData[3]['img']['src']}
                alt={''}
                width={25}
                height={25}
                className="object-cover"
              />
            </div>

          </div>

          <div>
            <p className="mb-3">
              {item?.description}
            </p>
            <Link href={item?.website} target="_blank">
              <p className="text-white bg-blue-400 px-3 py-1.5 rounded-lg ">
                Visit site
              </p>
            </Link>
          </div>

          <div className="grid grid-cols-3 grid-rows-3 gap-2 place-items-center">
            <div className=" col-span-3 row-span-3">
              <Image
                src={item?.mainImage}
                alt="NFT Store Logo"
                width={300}
                height={300}
                className="object-cover"
              />
            </div>
            <div className=" ">
              <Image
                src={item?.image1}
                alt="NFT Store Logo"
                width={80}
                height={80}
                className="object-cover"
              />
            </div>
            <div className="">
              <Image
                src={item?.image2}
                alt="NFT Store Logo"
                width={80}
                height={80}
                className="object-cover"
              />
            </div>
            <div className="">
              <Image
                src={item?.image3}
                alt="NFT Store Logo"
                width={80}
                height={80}
                className="object-cover"
              />
            </div>
          </div>
        </div>
      )
        : null}
    </div>
  );
};

export default Card;
