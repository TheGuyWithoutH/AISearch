"use client";

import { SettingsContext } from "../../components/App";
import GoBackButton from "../../components/GoBackButton";
import SettingShortcutOption from "../../components/SettingShortcutOption";
import useSettings from "../../hooks/SettingsCallback";
import styles from "../../styles/Settings.module.css";

export default function Settings() {
  const [settings, updateSettings, settingsState, setSettingsState] =
    useSettings(SettingsContext);

  return (
    <div className="app">
      <div className={styles.settingsContainer}>
        <GoBackButton onLeave={() => updateSettings(settingsState)} />
        <h1 className={styles.settingsContainer__title}>Shortcuts</h1>
        <SettingShortcutOption
          label="Open Settings"
          currentShortcut={settings.shortcuts.settings}
          handleChange={(e: string) => {
            setSettingsState((prev) => ({
              ...prev,
              shortcuts: {
                ...prev.shortcuts,
                settings: e,
              },
            }));
          }}
        />
        <SettingShortcutOption
          label="Open Chat"
          currentShortcut={settings.shortcuts.chat}
          handleChange={(e: string) => {
            setSettingsState((prev) => ({
              ...prev,
              shortcuts: {
                ...prev.shortcuts,
                chat: e,
              },
            }));
          }}
        />
        <SettingShortcutOption
          label="Open History"
          currentShortcut={settings.shortcuts.history}
          handleChange={(e: string) => {
            setSettingsState((prev) => ({
              ...prev,
              shortcuts: {
                ...prev.shortcuts,
                history: e,
              },
            }));
          }}
        />
      </div>
    </div>
  );
}
