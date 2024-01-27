import React, { FormEvent } from 'react';
import './styles/App.css';
import { SearchBar } from './components/SearchBar';
import ChatFeed, { Message } from './components/ChatFeed';
import useMessages from './hooks/MessagesCallback';

export default function App() {
  const messages: Message[] = [
    {
      type: 'bot',
      message: 'Hello, how can I help you?',
    },
    {
      type: 'user',
      message: 'I want to know about Google',
    },
    {
      type: 'bot',
      message:
        'Google LLC is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware.',
    },
  ];

  const [chatMessages, isLoading, handleSubmit, isChatEnabled] = useMessages();

  return (
    <div className="app">
      <SearchBar onSubmit={handleSubmit} />
      <div className="results">
        {/* <div className="result">
          <div className="result__title">
            <a href="https://www.google.com" target="_blank">
              Google
            </a>
          </div>
          <div className="result__description">
            <p>
              Google LLC is an American multinational technology company that
              specializes in Internet-related services and products, which
              include online advertising technologies, a search engine, cloud
              computing, software, and hardware.
            </p>
          </div>
          <div className="result__link">
            <a href="https://www.google.com" target="_blank">
              https://www.google.com
            </a>
          </div>
        </div>
        <div className="result">
          <div className="result__title">
            <a href="https://www.google.com">Google</a>
          </div>
          <div className="result__description">
            <p>
              Google LLC is an American multinational technology company that
              specializes in Internet-related services and products, which
              include online advertising technologies, a search engine, cloud
              computing, software, and hardware.
            </p>
          </div>
          <div className="result__link">
            <a href="https://www.google.com">https://www.google.com</a>
          </div>
        </div>
        <div className="result">
          <div className="result__title">
            <a href="https://www.google.com">Google</a>
          </div>
          <div className="result__description">
            <p>
              Google LLC is an American multinational technology company that
              specializes in Internet-related services and products, which
              include online advertising technologies, a search engine, cloud
              computing, software, and hardware.
            </p>
          </div>
          <div className="result__link">
            <a href="https://www.google.com" target="_blank">
              https://www.google.com
            </a>
          </div>
        </div>
        <div className="result">
          <div className="result__title">
            <a href="https://www.google.com">Google</a>
          </div>
          <div className="result__description">
            <p>
              Google LLC is an American multinational technology company that
              specializes in Internet-related services and products, which
              include online advertising technologies, a search engine, cloud
              computing, software, and hardware.
            </p>
          </div>
          <div className="result__link">
            <a href="https://www.google.com">https://www.google.com</a>
          </div>
        </div> */}
        <ChatFeed messages={chatMessages} isLoading={isLoading} />
      </div>
    </div>
  );
}
