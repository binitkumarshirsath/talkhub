interface ChatBubbleType {
  content: string;
  isUser: boolean;
  imgSrc: string | null;
}

const ChatBubble = ({ content, imgSrc, isUser }: ChatBubbleType) => {
  return (
    <div className={`chat chat-${isUser ? "end" : "start"}`}>
      <div className="chat-image avatar">
        <div className="w-10 rounded-full">
          <img alt="Tailwind CSS chat bubble component" src={imgSrc || ""} />
        </div>
      </div>
      <div className="chat-bubble">{content}</div>
    </div>
  );
};

export default ChatBubble;
