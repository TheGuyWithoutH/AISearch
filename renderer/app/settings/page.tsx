"use client";

import { usePathname } from "next/navigation";
import { SettingsContext } from "../components/App";
import GoBackButton from "../components/GoBackButton";
import SettingSwitchOption from "../components/SettingSwitchOption";
import { SettingTextOption } from "../components/SettingTextOption";
import useSettings from "../hooks/SettingsCallback";
import { getLink } from "../hooks/utils";
import styles from "../styles/Settings.module.css";
import MenuItem from "../components/MenuItem";
import { FaComments, FaKeyboard, FaUser } from "react-icons/fa";

export default function Settings() {
  const pathname = usePathname();

  return (
    <div className="app">
      <div className={styles.settingsContainer}>
        <GoBackButton />
        <h1 className={styles.settingsContainer__title}>Settings</h1>
        <MenuItem
          name="Profile"
          icon={<FaUser size={"2em"} />}
          link={getLink("/settings/profile", pathname)}
        />
        <MenuItem
          name="Chat"
          icon={<FaComments size={"2em"} />}
          link={getLink("/settings/chat", pathname)}
        />
        <MenuItem
          name="Shortcuts"
          icon={<FaKeyboard size={"2em"} />}
          link={getLink("/settings/shortcuts", pathname)}
        />
      </div>
    </div>
  );
}
