"use client";

import { createContext } from "react";
import { DEFAULT_SETTINGS, UserSettings } from "../../../electron-src/store";
import { useGlobalSettings } from "../hooks/SettingsCallback";
import "../styles/dracula-theme.css";

export const SettingsContext = createContext<{
  settings: UserSettings;
  changeSettings: (newSettings: UserSettings) => void;
}>({
  settings: DEFAULT_SETTINGS,
  changeSettings: () => {},
});

export default function App({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [settings, changeSettings] = useGlobalSettings(DEFAULT_SETTINGS);

  return (
    <SettingsContext.Provider value={{ settings, changeSettings }}>
      {children}
    </SettingsContext.Provider>
  );
}
