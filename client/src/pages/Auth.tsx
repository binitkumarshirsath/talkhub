import { useState } from "react";
import Register from "../components/Register";

const Auth = () => {
  const [isNewUser, setIsNewUser] = useState(true);
  return (
    <div className="min-h-screen w-full flex  ">
      <div className="w-full flex flex-col items-center rounded-lg m-2">
        <div className="font-normal w-full flex items-center justify-center text-[4vw] text-white">
          talk <span className=" text-[#7953F7]">hub.</span>
        </div>
        <div>
          <img
            className="rounded-lg mt-4 opacity-80 object-cover"
            src="https://i.pinimg.com/564x/6e/b3/84/6eb384ad5e52e85e985e8e57769e8453.jpg"
            alt="logo"
          />
        </div>
      </div>
      <div className="w-full flex flex-col items-center  rounded-lg m-2">
        <div className="font-normal w-full flex items-center justify-center text-[4vw] text-white">
          start&nbsp;<span className=" text-[#7953F7]">chatting </span>{" "}
          &nbsp;now.
        </div>

        <div className="flex rounded-lg bg-[#26262d] p-2">
          <button
            onClick={() => setIsNewUser(true)}
            className={`py-1 px-5 rounded tracking-wider font-medium ${
              isNewUser && "bg-[#121215] text-white"
            }`}
          >
            REGISTER
          </button>
          <button
            onClick={() => setIsNewUser(false)}
            className={`py-1 px-5 rounded tracking-wider font-medium ${
              !isNewUser && "bg-[#121215] text-white"
            }`}
          >
            LOGIN
          </button>
        </div>

        {isNewUser ? <Register /> : null}
      </div>
    </div>
  );
};

export default Auth;
