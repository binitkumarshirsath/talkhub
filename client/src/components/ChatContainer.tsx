import { useEffect, useRef } from "react";
import { User, useAuth } from "../context/auth-context";

import { useGetChatStore } from "../hooks/useGetChatStore";

import ChatBubble from "./ChatBubble";
import { useListenChat } from "../hooks/useListenChat";

interface ChatContainerProps {
  receiver: User | null;
}

const ChatContainer = ({ receiver }: ChatContainerProps) => {
  const { auth } = useAuth();
  const receiverId = receiver ? receiver._id : null;
  //use to add new messages to array of message

  const { chat } = useGetChatStore(receiverId);

  // Ref for scrolling to bottom
  const chatEndRef = useRef<HTMLDivElement>(null);
  useListenChat();
  useEffect(() => {
    // Scroll to bottom

    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({
        behavior: "smooth",
        block: "end",
        inline: "nearest",
      });
    }
  }, [chat, receiverId]);

  return (
    <>
      <div
        className="flex h-full flex-col px-7 gap-4 overflow-y-scroll  max-h-[calc(100vh-200px)] min-h-[calc(100vh-300px)]"
        style={{ scrollbarWidth: "none" }}
      >
        {chat?.map((chat, index) => {
          console.log({ chat });
          const isUser = chat.senderId === auth?._id;
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
        <div ref={chatEndRef} />
      </div>
    </>
  );
};

export default ChatContainer;
