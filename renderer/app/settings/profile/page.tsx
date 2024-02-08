"use client";

import { SettingsContext } from "../../components/App";
import GoBackButton from "../../components/GoBackButton";
import SettingsImagePicker from "../../components/SettingImagePicker";
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
        <h1 className={styles.settingsContainer__title}>Profile</h1>
        <SettingsImagePicker
          onImageChange={(image: string) => {
            setSettingsState((prev) => ({
              ...prev,
              profile_picture: image,
            }));
          }}
          src={settings.profile_picture}
        />
        <SettingTextOption
          label="Username"
          value={settingsState.name}
          onChange={(e: string) => {
            setSettingsState((prev) => ({
              ...prev,
              name: e,
            }));
          }}
        />
        <SettingTextOption
          label="Assistant Name"
          value={settingsState.assistant_name}
          onChange={(e: string) => {
            setSettingsState((prev) => ({
              ...prev,
              assistant_name: e,
            }));
          }}
        />
      </div>
    </div>
  );
}
