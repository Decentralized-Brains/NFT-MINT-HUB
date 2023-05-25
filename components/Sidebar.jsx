import React from "react";
import { chainsData } from "@/components/Data";
import Image from "next/image";

const Sidebar = ({setFilterOption}) => {
  const getFilter=(event)=>{
    setFilterOption(event.target.value)
  }
  return (
    <div className="glassmorphism w-full h-full">
      <section className="p-2 ">
        <form className="">
          {chainsData.map((items) => (
            <div key={items.id} className="flex my-2">
              <input
                type="checkbox"
                id={items.name}
                name={items.name}
                value={items.name}
                onChange={getFilter}
             
              />
              <div className="flex">
                <Image src={items.img} className="w-6 h-6 mx-3 " />
                <div>{items.name}</div>

                <span className="bg-[#5865f247] ml-2 px-2 py-1 rounded-2xl text-xs">
                  100
                </span>
              </div>
            </div>
          ))}
        </form>
      </section>
    </div>
  );
};

export default Sidebar;
