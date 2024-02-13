import { User, useAuth } from "../context/auth-context";
import { useGetChat } from "../hooks/useGetChat";
import ChatBubble from "./ChatBubble";

interface ChatContainerProps {
  receiver: User;
}

const ChatContainer = ({ receiver }: ChatContainerProps) => {
  const { auth } = useAuth();
  const { data } = useGetChat(receiver._id);
  return (
    <div
      className="flex h-full flex-col px-7 gap-4 overflow-y-scroll  max-h-[calc(100vh-200px)] min-h-[calc(100vh-300px)]"
      style={{ scrollbarWidth: "none" }}
    >
      {data?.data.map((chat, index) => {
        if (!chat.senderId || !chat.receiverId) {
          return null; // Skip rendering if senderId or receiverId is not available
        }
        const isUser = chat.senderId._id === auth?._id;
        const imgSrc = isUser ? auth.profileImage : receiver.profileImage;
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
