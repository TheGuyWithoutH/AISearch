import { FormEvent, useEffect, useState } from 'react';
import { Message } from '../components/ChatFeed';
import { LlmGeneration } from './LlmGeneration';

const useMessages = () => {
  const [chatMessages, setChatMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isChatEnabled, setIsChatEnabled] = useState(false);
  const [isLLMLoaded, setIsLLMLoaded] = useState(false);
  const [generator, setGenerator] = useState<LlmGeneration>(
    new LlmGeneration(() => setIsLLMLoaded(true)),
  );

  useEffect(() => {
    if (isLLMLoaded) {
      setIsChatEnabled(true);
    }
  }, [isLLMLoaded]);

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    // Prevent the browser from reloading the page
    event.preventDefault();

    // Read the form data
    const formData = new FormData(event.currentTarget);
    const message = formData.get('message') as string;

    // add the message to the chat
    setChatMessages((prevMessages) => [
      ...prevMessages,
      {
        type: 'user',
        message,
      },
    ]);

    // clear the input field
    event.currentTarget.reset();

    // generate a response
    generator
      .generateResponse(message)
      .then((response: { data: string[] }) => {
        console.log(response);
        setChatMessages((prevMessages) => [
          ...prevMessages,
          {
            type: 'bot',
            message: response.data[0].split('</s>')[0],
            delay: 0,
          },
        ]);
        setIsLoading(false);
      })
      .catch((error: any) => {
        console.log(error);
      });
    setIsLoading(true);
  }

  return [chatMessages, isLoading, handleSubmit, isChatEnabled] as const;
};

export default useMessages;
