"use client";

import GoBackButton from "../components/GoBackButton";
import SettingSwitchOption from "../components/SettingSwitchOption";
import Switch from "../components/SettingSwitchOption";
import { SettingTextOption } from "../components/SettingTextOption";
import styles from "../styles/Settings.module.css";

export default function App() {
  return (
    <div className="app">
      <div className={styles.settingsContainer}>
        <GoBackButton />
        <h1 className={styles.settingsContainer__title}>Settings</h1>
        <SettingTextOption
          label="Username"
          value="John Doe"
          onChange={() => {}}
        />
        <SettingTextOption
          label="Assistant Name"
          value="Mistral"
          onChange={() => {}}
        />
        <SettingSwitchOption
          label={"Dark Mode"}
          defaultIsOn={true}
          handleToggle={() => {}}
        />
      </div>
    </div>
  );
}
