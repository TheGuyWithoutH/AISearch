import React from 'react';
import MessageBubble from './MessageBubble';
import styles from '../styles/ChatFeed.module.css';

export type Message = {
  type: 'bot' | 'instructions' | 'user';
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
  return (
    <div className={styles.container}>
      {messages.map((message, index) => {
        return (
          <MessageBubble
            key={index}
            sender={message.type === 'bot' ? 'receiver' : 'sender'}
            message={message.message}
          />
        );
      })}

      {isLoading && <MessageBubble sender="receiver" message="" isLoading />}
    </div>
  );
};

export default ChatFeed;
