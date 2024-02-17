import { MessageSquareCodeIcon } from "lucide-react";
import UserInfo from "./UserInfo";
import { useGetAllUsers } from "../hooks/useGetUsers";
import { useAuth } from "../context/auth-context";
import { useChat } from "../context/chat-context";
import { useState } from "react";

const LeftHomeBar = () => {
  const { auth } = useAuth();
  const { setActiveChat } = useChat();
  const [search, setSearch] = useState("");
  const { data } = useGetAllUsers(search);

  return (
    <div className="w-full flex flex-col p-5 border-r border-gray-500">
      <UserInfo user={auth} />
      {/* Search bar too be made */}
      <input
        value={search}
        name="name"
        onChange={(e) => setSearch(e.target.value)}
        type="search"
        id="default-search"
        className="block w-full p-3 ps-10 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Search users here..."
      />
      {/* List of users */}
      <div
        className="w-full mt-5 max-w-md p-4 max-h-[calc(100vh-200px)] mb-4  overflow-y-scroll border border-[#393942] rounded-lg shadow sm:p-8"
        style={{ scrollbarWidth: "none" }}
      >
        <div className="flow-root ">
          <ul
            role="list"
            className="divide-y  divide-gray-200 dark:divide-gray-700"
          >
            {data?.data.users.map((user) => (
              <li
                onClick={() => setActiveChat(user)}
                key={user._id}
                className="py-2 sm:py-4"
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="w-8 h-8 rounded-full"
                      src={
                        user.profileImage
                          ? user.profileImage
                          : "https://api.dicebear.com/7.x/lorelei/svg"
                      }
                      alt="Neil image"
                    />
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      {user.firstName} {user.lastName}
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      {user.userName}
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white">
                    <MessageSquareCodeIcon />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LeftHomeBar;
