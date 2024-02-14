import { useEffect } from "react";
import LeftHomeBar from "../components/LeftHomeBar";
import MidHomeBar from "../components/MidHomeBar";
import RightHomeBar from "../components/RightHomeBar";
import { socket } from "../socket";

const Home = () => {
  useEffect(() => {
    socket.on("connect", () => {
      console.log("connected.");
      return () => {};
    });
  }, []);

  return (
    <div className="h-full w-full grid grid-cols-4">
      <LeftHomeBar />
      <MidHomeBar />
      <RightHomeBar />
    </div>
  );
};

export default Home;
