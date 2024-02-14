import { useChat } from "../context/chat-context";
import { useSocket } from "../context/socket-context";

import ChatContainer from "./ChatContainer";
import MessageBox from "./MessageBox";
import UserInfo from "./UserInfo";

const MidHomeBar = () => {
  const { activeChat } = useChat();
  const { onlineUsers } = useSocket();
  console.log(onlineUsers);
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
