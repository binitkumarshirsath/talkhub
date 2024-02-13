import { useAuth } from "../context/auth-context";
import { useChat } from "../context/chat-context";
import { useGetChat } from "../hooks/useGetChat";
import ChatBubble from "./ChatBubble";
import UserInfo from "./UserInfo";

const MidHomeBar = () => {
  const { activeChat } = useChat();
  const { auth } = useAuth();
  const { data } = useGetChat(activeChat._id);

  return (
    <div className="flex flex-col border-r col-span-2  border-gray-500  w-full gap-3 p-5 overflow-hidden ">
      <UserInfo user={activeChat} />
      {/* chat section */}
      <div
        className="flex h-full flex-col px-7 gap-4 overflow-y-scroll  max-h-[calc(100vh-200px)] min-h-[calc(100vh-300px)]"
        style={{ scrollbarWidth: "none" }}
      >
        {data?.data.map((chat, index) => {
          return (
            <ChatBubble
              content={chat.content}
              key={index}
              imgSrc={chat.senderId.profileImage}
              isUser={chat.senderId._id === auth?._id}
            />
          );
        })}
      </div>

      <form className="mt-4  bottom-10 ">
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
    </div>
  );
};

export default MidHomeBar;
