import { useChat } from "../context/chat-context";

import ChatContainer from "./ChatContainer";
import MessageBox from "./MessageBox";
import UserInfo from "./UserInfo";

const MidHomeBar = () => {
  const { activeChat } = useChat();

  return (
    <div className="flex flex-col border-r col-span-2  border-gray-500  w-full gap-3 p-5 overflow-hidden ">
      <UserInfo user={activeChat} />
      {/* chat section */}
      <ChatContainer receiver={activeChat} />

      <MessageBox />
    </div>
  );
};

export default MidHomeBar;
