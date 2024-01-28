"use client";

import React, { FormEvent } from "react";
import { SearchBar } from "./components/SearchBar";
import ChatFeed, { Message } from "./components/ChatFeed";
import useMessages from "./hooks/MessagesCallback";

export default function App() {
  const [chatMessages, isLoading, handleSubmit, isChatEnabled] = useMessages();

  return (
    <div className="app">
      <SearchBar onSubmit={handleSubmit} />
      <div className="results">
        <ChatFeed messages={chatMessages} isLoading={isLoading} />
      </div>
    </div>
  );
}
