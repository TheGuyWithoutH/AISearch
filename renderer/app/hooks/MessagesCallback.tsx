"use client";

import { FormEvent, useEffect, useState } from "react";
import { Message } from "../components/ChatFeed";
import { LlmGeneration } from "./LlmGeneration";
import { setUserConfig } from "../data/database";
import { useRouter } from "next/navigation";
import { getLink } from "./utils";
import { usePathname } from "next/navigation";
import SpeechGenerator from "./SpeechGenerator";
import responseParser from "./MessageParsing";

const SETTINGS_CMD = "/settings";

const useMessages = (modelUrl?: string) => {
  const [chatMessages, setChatMessages] = useState<Message[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isChatEnabled, setIsChatEnabled] = useState(false);
  const [isLLMLoaded, setIsLLMLoaded] = useState(false);
  const [generator, setGenerator] = useState<LlmGeneration | undefined>(
    undefined
  );

  const router = useRouter();
  const pathname = usePathname();
  const speechSynthesis = new SpeechGenerator();

  useEffect(() => {
    setGenerator(new LlmGeneration(() => setIsLLMLoaded(true), modelUrl));
  }, []);

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
    const message = formData.get("message") as string;

    if (message === SETTINGS_CMD) {
      const link = getLink("/settings", pathname);
      router.push(link);
      return;
    }

    // add the message to the chat
    setChatMessages((prevMessages) => [
      ...prevMessages,
      {
        type: "user",
        message,
      },
    ]);

    // clear the input field
    event.currentTarget.reset();

    if (!generator) {
      return;
    }

    // generate a response
    generator
      .generateResponse(message)
      .then((response: { data: string[] }) => {
        console.log(response);
        setChatMessages((prevMessages) => [
          ...prevMessages,
          {
            type: "bot",
            message: responseParser(response.data[0]),
            delay: 0,
          },
        ]);
        setIsLoading(false);
        //speechSynthesis.speak(response.data[0].split("\n")[0]);
      })
      .catch((error: any) => {
        console.log(error);
      });
    setIsLoading(true);
  }

  return [chatMessages, isLoading, handleSubmit, isChatEnabled] as const;
};

export default useMessages;
