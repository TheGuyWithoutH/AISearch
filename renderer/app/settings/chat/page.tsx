"use client";

import { SettingsContext } from "../../components/App";
import GoBackButton from "../../components/GoBackButton";
import SettingSwitchOption from "../../components/SettingSwitchOption";
import { SettingTextOption } from "../../components/SettingTextOption";
import useSettings from "../../hooks/SettingsCallback";
import styles from "../../styles/Settings.module.css";

export default function Settings() {
  const [settings, updateSettings, settingsState, setSettingsState] =
    useSettings(SettingsContext);

  return (
    <div className="app">
      <div className={styles.settingsContainer}>
        <GoBackButton onLeave={() => updateSettings(settingsState)} />
        <h1 className={styles.settingsContainer__title}>Chat</h1>
        <SettingTextOption
          label="Instruction Prompt"
          value={settingsState.pre_prompt}
          isParagraph
          onChange={(e: string) => {
            setSettingsState((prev) => ({
              ...prev,
              pre_prompt: e,
            }));
          }}
        />
        <SettingTextOption
          label="Gradio URL"
          value={settingsState.model_url}
          onChange={(e: string) => {
            setSettingsState((prev) => ({
              ...prev,
              assistant_name: e,
            }));
          }}
        />
        <SettingSwitchOption
          label={"Dark Mode"}
          defaultIsOn={settingsState.dark_mode}
          handleToggle={() => {
            setSettingsState((prev) => ({
              ...prev,
              dark_mode: !prev.dark_mode,
            }));
          }}
        />
      </div>
    </div>
  );
}
