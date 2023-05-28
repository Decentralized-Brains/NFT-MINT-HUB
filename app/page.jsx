"use client"
import TopFilter from "../components/TopFilter";
import Card from "../components/Card";
import Sidebar from "@components/Sidebar";
import { useState } from "react";


const Home = () => {
  const [filterOption, setFilterOption] = useState([])
  console.log(filterOption)
  
  return (
    <div className="container flex flex-col md:flex-row mt-5">
      <div className="w-full md:w-1/4">
        <Sidebar setFilterOption={setFilterOption} filterOption={filterOption}/>
      </div>
      <div className="md:ml-2 w-full">
        <TopFilter />
        <Card filterOption={filterOption}/>
      </div>
    </div>
  );
};

export default Home;
