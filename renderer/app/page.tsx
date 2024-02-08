"use client";

import React, { useContext } from "react";
import { SearchBar } from "./components/SearchBar";
import ChatFeed from "./components/ChatFeed";
import useMessages from "./hooks/MessagesCallback";
import { SettingsContext } from "./components/App";
import { UserSettings } from "../../electron-src/store";

export default function App() {
  const { settings } = useContext<{
    settings: UserSettings;
    changeSettings: (newSettings: UserSettings) => void;
  }>(SettingsContext);
  const [chatMessages, isLoading, handleSubmit, _] = useMessages(
    settings.model_url
  );

  return (
    <div className="app">
      <SearchBar onSubmit={handleSubmit} />
      <div className="results">
        <ChatFeed
          messages={chatMessages}
          isLoading={isLoading}
          profilePictureSrc={settings.profile_picture}
        />
      </div>
    </div>
  );
}
