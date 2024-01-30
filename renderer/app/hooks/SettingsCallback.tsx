"use client";

import { Context, useContext, useEffect, useState } from "react";
import { DEFAULT_SETTINGS, UserSettings } from "../../../electron-src/store";

const useSettings = (
  context: Context<{
    settings: UserSettings;
    changeSettings: (newSettings: UserSettings) => void;
  }>
) => {
  const { settings, changeSettings } = useContext<{
    settings: UserSettings;
    changeSettings: (newSettings: UserSettings) => void;
  }>(context);
  const [settingsState, setSettingsState] =
    useState<UserSettings>(DEFAULT_SETTINGS);

  useEffect(() => {
    setSettingsState(settings);
  }, [settings]);

  const updateSettings = async (newSettings: UserSettings) => {
    console.log("updateSettings frontend");
    // @ts-ignore
    await window.electron.setSettings(newSettings);
    changeSettings(newSettings);
  };

  return [settings, updateSettings, settingsState, setSettingsState] as const;
};

export const useGlobalSettings = (defaultSettings: UserSettings) => {
  const [settings, changeSettings] = useState<UserSettings>(defaultSettings);

  useEffect(() => {
    (async () => {
      const settings = await getSettings();
      if (settings) changeSettings(settings);
    })();
  }, []);

  return [settings, changeSettings] as const;
};

export const getSettings = async () => {
  // @ts-ignore
  return await window.electron.getSettings();
};

export default useSettings;
