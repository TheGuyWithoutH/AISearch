import React from "react";
import styles from "../styles/Settings.module.css";

const SettingsImagePicker = ({
  onImageChange,
  src,
}: {
  onImageChange: (image: string) => void;
  src: string;
}) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      onImageChange(e.target.result as string);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className={styles.settings_ImageOption}>
      <label htmlFor="photo-upload" className={styles.settings_imageLabel}>
        <div className="img-wrap img-upload">
          <img
            className={styles.settings_imageDisplay}
            htmlFor="photo-upload"
            src={src}
          />
        </div>
        <input
          className={styles.settings_imageInput}
          id="photo-upload"
          type="file"
          onChange={onChange}
        />
      </label>
    </div>
  );
};

export default SettingsImagePicker;
