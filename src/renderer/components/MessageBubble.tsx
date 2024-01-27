import React from 'react';
import styles from '../styles/MessageBubble.module.css';

const MessageBubble = ({
  sender,
  message,
  isLoading = false,
}: {
  sender: 'sender' | 'receiver';
  message: string;
  isLoading?: boolean;
}) => {
  const profilePicture =
    sender === 'sender'
      ? 'https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg'
      : 'https://liu.se/dfsmedia/dd35e243dfb7406993c1815aaf88a675/76528-50065/ai-genererad-bild-av-sara-laathen-till-ai-sidornas-toppbild?as=1&w=640&h=360&cr=1&crw=640&crh=360&bc=%23ffffff';

  return (
    <div
      className={`${styles.messageBubble} ${
        sender === 'receiver' ? styles.receiver : styles.sender
      }`}
    >
      <img
        src={profilePicture}
        alt="Profile"
        className={styles.profilePicture}
      />
      <div className={styles.arrow}></div>
      {isLoading ? (
        <div className={styles.loading}>
          <div className={styles.loader}>
            <div className={`${styles.dot} ${styles.dot1}`}></div>
            <div className={`${styles.dot} ${styles.dot2}`}></div>
            <div className={`${styles.dot} ${styles.dot3}`}></div>
          </div>
        </div>
      ) : (
        <p>{message}</p>
      )}
    </div>
  );
};

export default MessageBubble;
