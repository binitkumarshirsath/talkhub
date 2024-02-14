import { useState } from "react";
import { useChat } from "../context/chat-context";
import { useSendMessage } from "../hooks/useSendMessage";

const MessageBox = () => {
  const { activeChat } = useChat();
  const receiverId = activeChat._id;
  const [content, setContent] = useState("");

  const { mutate } = useSendMessage();

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    mutate({ content, receiverId });
    setContent("");
  };
  return (
    <form className="mt-4  bottom-10 " onSubmit={onSubmit}>
      <label
        htmlFor="content"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        content
      </label>
      <div className="relative">
        <input
          type="message"
          id="content"
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="block w-full p-3 ps-10 text-base text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Type your message here..."
        />
      </div>
    </form>
  );
};

export default MessageBox;
