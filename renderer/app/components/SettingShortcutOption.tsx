import React, { useEffect, useState } from "react";
import styles from "../styles/Settings.module.css";

const ShortcutSelect = ({ handleChange, currentShortcut }) => {
  const [shortcut, setShortcut] = useState<Set<String>>(
    new Set(currentShortcut.split(" + "))
  );

  useEffect(() => {
    console.log(shortcut);
  }, [shortcut]);

  return (
    <input
      className={styles.settings_shortcutInput}
      value={
        shortcut.size === 0 ? "Press a key" : Array.from(shortcut).join(" + ")
      }
      onFocus={() => {
        setShortcut(new Set());
      }}
      onBlur={() => {
        handleChange(Array.from(shortcut).join(" + "));
      }}
      onKeyDown={(e) => {
        console.log(e.key);
        setShortcut((sc) => new Set([...sc, mapKeyToReadable(e.key)]));
      }}
    />
  );
};

const SettingShortcutOption = ({ label, handleChange, currentShortcut }) => {
  return (
    <div className={styles.settings_shortcutOption}>
      <label className={styles.settings_OptionLabel}>{label}</label>
      <ShortcutSelect
        handleChange={handleChange}
        currentShortcut={currentShortcut}
      />
    </div>
  );
};

const mapKeyToReadable = (key: string) => {
  switch (key) {
    case "Control":
      return "CTRL";
    case "Alt":
      return "ALT";
    case "Shift":
      return "SHIFT";
    case " ":
      return "SPACE";
    default:
      return key.toUpperCase();
  }
};

export default SettingShortcutOption;
