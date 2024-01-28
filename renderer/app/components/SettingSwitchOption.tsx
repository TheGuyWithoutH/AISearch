import React, { useState } from "react";
import styles from "../styles/Settings.module.css";

const Switch = ({ defaultIsOn, handleToggle }) => {
  const [isOn, setIsOn] = useState(defaultIsOn);

  return (
    <>
      <input
        checked={isOn}
        onChange={() => {
          setIsOn(!isOn);
          handleToggle();
        }}
        className={styles.react_switch_checkbox}
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        className={styles.react_switch_label}
        htmlFor={`react-switch-new`}
        style={{ background: isOn && "#06D6A0" }}
      >
        <span className={styles.react_switch_button} />
      </label>
    </>
  );
};

const SettingSwitchOption = ({ label, defaultIsOn, handleToggle }) => {
  return (
    <div className={styles.settings_switchOption}>
      <label className={styles.settings_OptionLabel}>{label}</label>
      <Switch defaultIsOn={defaultIsOn} handleToggle={handleToggle} />
    </div>
  );
};

export default SettingSwitchOption;
