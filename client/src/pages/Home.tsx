import LeftHomeBar from "../components/LeftHomeBar";
import MidHomeBar from "../components/MidHomeBar";

const Home = () => {
  return (
    <div className="h-full w-full grid grid-cols-3">
      <LeftHomeBar />
      <MidHomeBar />
      <div className="bg-purple-600"></div>
    </div>
  );
};

export default Home;
