import React, { useEffect } from "react";
import MessageBubble from "./MessageBubble";
import styles from "../styles/ChatFeed.module.css";
import hljs from "highlight.js";

export type Message = {
  type: "bot" | "instructions" | "user";
  message: string;
  options?: {
    text: string;
    action: string[];
  }[];
};

const ChatFeed = ({
  messages,
  isLoading,
}: {
  messages: Message[];
  isLoading: boolean;
}) => {
  useEffect(() => {
    hljs.highlightAll();
  }, [messages]);

  return (
    <div className={styles.container}>
      {messages.map((message, index) => {
        return (
          <MessageBubble
            key={index}
            sender={message.type === "bot" ? "receiver" : "sender"}
            message={message.message}
          />
        );
      })}

      {isLoading && <MessageBubble sender="receiver" message="" isLoading />}
    </div>
  );
};

export default ChatFeed;
