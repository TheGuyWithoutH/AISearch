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
  profilePictureSrc = "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
}: {
  messages: Message[];
  isLoading: boolean;
  profilePictureSrc?: string;
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
            profilePictureSrc={profilePictureSrc}
            message={message.message}
          />
        );
      })}

      {isLoading && <MessageBubble sender="receiver" message="" isLoading />}
    </div>
  );
};

export default ChatFeed;
