import React from "react";
import styles from "../styles/Settings.module.css";

// An input field with a label that can be used to change a setting

export const SettingTextOption = (
  props: Readonly<{
    label: string;
    value: string;
    onChange: (value: string) => void;
    isParagraph?: boolean;
  }>
) => {
  return (
    <div className={styles.settings_textOption}>
      <label className={styles.settings_OptionLabel}>{props.label}</label>
      {props.isParagraph ? (
        <textarea
          value={props.value}
          onChange={(event) => props.onChange(event.target.value)}
          className={styles.settings_textOptionInputParagraph}
        />
      ) : (
        <input
          type="text"
          value={props.value}
          onChange={(event) => props.onChange(event.target.value)}
          className={styles.settings_textOptionInput}
        />
      )}
    </div>
  );
};
