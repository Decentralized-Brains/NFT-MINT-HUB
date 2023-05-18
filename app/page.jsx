import TopFilter from "../components/TopFilter";
import Card from "../components/Card";
import Sidebar from "@components/Sidebar";

const Home = () => {
  return (
    <div className="container flex flex-col md:flex-row mt-5">
      <div className="w-full md:w-1/4">
        <Sidebar />
      </div>
      <div className="md:ml-2 w-full">
        <TopFilter />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Home;
