import LeftHomeBar from "../components/LeftHomeBar";
import MidHomeBar from "../components/MidHomeBar";
import RightHomeBar from "../components/RightHomeBar";

const Home = () => {
  return (
    <div className="h-full w-full grid grid-cols-4">
      <LeftHomeBar />
      <MidHomeBar />
      <RightHomeBar />
    </div>
  );
};

export default Home;
