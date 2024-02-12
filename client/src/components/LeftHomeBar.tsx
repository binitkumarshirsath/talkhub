import { MessageSquareCodeIcon } from "lucide-react";
import UserInfo from "./UserInfo";

const LeftHomeBar = () => {
  const users = [
    {
      username: "user1",
      _id: 1,
      name: "John Doe",
      profilePic: "https://example.com/profile1.jpg",
    },
    {
      username: "user2",
      _id: 2,
      name: "Jane Smith",
      profilePic: "https://example.com/profile2.jpg",
    },
    {
      username: "user3",
      _id: 3,
      name: "Alice Johnson",
      profilePic: "https://example.com/profile3.jpg",
    },
    {
      username: "user3",
      _id: 4,
      name: "Alice Johnson",
      profilePic: "https://example.com/profile3.jpg",
    },
    {
      username: "user3",
      _id: 5,
      name: "Alice Johnson",
      profilePic: "https://example.com/profile3.jpg",
    },
    // Add more objects as needed
  ];
  return (
    <div className="w-full flex flex-col p-5 border-r border-gray-500">
      <UserInfo />
      {/* Search bar too be made */}
      <form className="mt-4">
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            id="default-search"
            className="block w-full p-3 ps-10 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search users here..."
          />
        </div>
      </form>
      {/* List of users */}

      <div className="w-full mt-5 max-w-md p-4  border border-[#393942] rounded-lg shadow sm:p-8">
        <div className="flow-root">
          <ul
            role="list"
            className="divide-y divide-gray-200 dark:divide-gray-700"
          >
            {users.map((user) => (
              <li key={user._id} className="py-2 sm:py-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0">
                    <img
                      className="w-8 h-8 rounded-full"
                      src={user.profilePic}
                      alt="Neil image"
                    />
                  </div>
                  <div className="flex-1 min-w-0 ms-4">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      {user.name}
                    </p>
                    <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                      {user.username}
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
