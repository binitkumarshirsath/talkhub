import { LogOut, Trash } from "lucide-react";
import { useLogout } from "../hooks/useLogout";

const RightHomeBar = () => {
  const { mutate } = useLogout();

  const handleLogout = () => {
    mutate();
  };
  return (
    <div className="flex flex-col  w-full gap-3 p-5 ">
      <div className="mx-auto flex  justify-between h-full items-center flex-col p-2">
        <div className="flex items-center flex-col">
          <img
            className="h-36 w-36 object-contain rounded-full"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
            alt="receiver"
          />
          <div className="w-full  px-4 text-center mt-4">
            <h1 className="text-3xl font-semibold">John Smigla</h1>
            <h2 className="text-[#7953F7]">jhonnybhai</h2>
          </div>
        </div>
        <div className="flex gap-2 items-center justify-between w-full ">
          <button
            onClick={handleLogout}
            className="px-5 text-lg py-2 bg-red-500 items-center font-semibold text-white flex gap-2 rounded-md"
          >
            Logout <LogOut height={25} />
          </button>
          <button className="px-5 text-lg py-2 bg-red-500 items-center font-semibold text-white flex gap-2 rounded-md">
            Delete Account <Trash height={25} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RightHomeBar;
