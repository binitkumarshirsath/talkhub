import { User, useAuth } from "../context/auth-context";
import { useGetChat } from "../hooks/useGetChat";
import ChatBubble from "./ChatBubble";

interface ChatContainerProps {
  receiver: User | null;
}

const ChatContainer = ({ receiver }: ChatContainerProps) => {
  const { auth } = useAuth();
  const receiverId = receiver ? receiver._id : null;
  const { data } = useGetChat(receiverId);

  return (
    <div
      className="flex h-full flex-col px-7 gap-4 overflow-y-scroll  max-h-[calc(100vh-200px)] min-h-[calc(100vh-300px)]"
      style={{ scrollbarWidth: "none" }}
    >
      {data?.data.map((chat, index) => {
        const isUser = chat.senderId._id === auth?._id;
        const imgSrc = isUser ? auth.profileImage : receiver?.profileImage;
        return (
          <ChatBubble
            content={chat.content}
            key={index}
            imgSrc={imgSrc}
            isUser={isUser}
          />
        );
      })}
    </div>
  );
};

export default ChatContainer;
