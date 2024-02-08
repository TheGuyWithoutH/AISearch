import React, { useEffect, useState } from "react";
import styles from "../styles/MessageBubble.module.css";
import { FaRegCopy } from "react-icons/fa";
import { usePathname } from "next/navigation";
import { getLink } from "../hooks/utils";
import { use } from "marked";

const MessageBubble = ({
  sender,
  message,
  isLoading = false,
  profilePictureSrc = "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
}: {
  sender: "sender" | "receiver";
  message: string;
  isLoading?: boolean;
  profilePictureSrc?: string;
}) => {
  const pathname = usePathname();
  const [profilePicture, setProfilePicture] =
    useState<string>(profilePictureSrc);

  useEffect(() => {
    if (sender === "receiver")
      setProfilePicture(getLink("/AI_avatar.png", pathname));
  }, [sender, pathname]);

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
          <p
            dangerouslySetInnerHTML={{ __html: message }}
            className={styles.message}
          />
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
