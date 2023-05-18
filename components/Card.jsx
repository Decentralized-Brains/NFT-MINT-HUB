import React from "react";
import Image from "next/image";
import CardLogo from "/public/assets/cardimg/logo.png";
import { socialsData } from "./Data";
import C1 from "public/assets/cardimg/1.png";

const Card = () => {
  return (
    <div className="glassmorphism w-full  my-5 ">
      <div className="flex flex-col lg:flex-row justify-between gap-5">
        <div className="md:w-1/3">
          <Image
            src={CardLogo}
            alt="NFT Store Logo"
            width={200}
            height={200}
            className="object-cover"
          />

          <div>
            <h5 className="text-xl font-bold">Elemental Hunters </h5>
            <h6 className="text-sm">May 12, 2023 – May 19, 2023</h6>
          </div>

          <div className="my-2 font-medium">
            <p>
              Platform: <span className="text-orange-800">Ethereum</span>
            </p>
            <p>
              Mint Price: <span className="text-orange-500">0.09 ETH</span>
            </p>
            <p>
              Re sale Price: <span className="text-orange-500">TBC</span>
            </p>
            <p>
              Collection Size: <span className="text-orange-500">10000</span>
            </p>
          </div>

          <div className="flex gap-3 items-center">
            {socialsData.map((items) => {
              return (
                <Image
                  src={items.img.src}
                  alt={items.name}
                  width={25}
                  height={25}
                  className="object-cover"
                />
              );
            })}
          </div>
        </div>

        <div>
          <p className="mb-3">
            DigiToads (TOAD) is a revolutionary new web3 gaming and staking
            platform, complete with its own NFT collection.
          </p>

          <a href="" className="text-white bg-blue-400 px-3 py-1.5 rounded-lg ">
            Visit site
          </a>
        </div>

        <div className="grid grid-cols-3 grid-rows-3 gap-2 place-items-center">
          <div className=" col-span-3 row-span-3">
            <Image
              src={C1}
              alt="NFT Store Logo"
              width={300}
              height={300}
              className="object-cover"
            />
          </div>
          <div className=" ">
            <Image
              src={C1}
              alt="NFT Store Logo"
              width={80}
              height={80}
              className="object-cover"
            />
          </div>
          <div className="">
            <Image
              src={C1}
              alt="NFT Store Logo"
              width={80}
              height={80}
              className="object-cover"
            />
          </div>
          <div className="">
            <Image
              src={C1}
              alt="NFT Store Logo"
              width={80}
              height={80}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
