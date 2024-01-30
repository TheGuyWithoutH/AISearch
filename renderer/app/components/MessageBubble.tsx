import React from "react";
import styles from "../styles/MessageBubble.module.css";
import { FaRegCopy } from "react-icons/fa";

const MessageBubble = ({
  sender,
  message,
  isLoading = false,
}: {
  sender: "sender" | "receiver";
  message: string;
  isLoading?: boolean;
}) => {
  const profilePicture =
    sender === "sender"
      ? "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg"
      : "/AI_avatar.png";

  return (
    <div
      className={`${styles.messageBubble} ${
        sender === "receiver" ? styles.receiver : styles.sender
      }`}
    >
      <img
        src={profilePicture}
        alt="Profile"
        className={styles.profilePicture}
      />
      {isLoading ? (
        <div className={styles.loading}>
          <div className={styles.loader}>
            <div className={`${styles.dot} ${styles.dot1}`}></div>
            <div className={`${styles.dot} ${styles.dot2}`}></div>
            <div className={`${styles.dot} ${styles.dot3}`}></div>
          </div>
        </div>
      ) : (
        <>
          <p>{message}</p>
          {sender === "receiver" && (
            <FaRegCopy
              title="Copy to clipboard"
              className={styles.copyIcon}
              onClick={() => navigator.clipboard.writeText(message)}
            />
          )}
        </>
      )}
    </div>
  );
};

export default MessageBubble;
