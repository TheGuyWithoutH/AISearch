export type SchemaType = {
  settings: UserSettings;
  chats: Chat[];
};

export type UserSettings = {
  name: string;
  assistant_name: string;
  profile_picture: string;
  pre_prompt: string;
  model_url: string;
  dark_mode: boolean;
  shortcuts: {
    settings: string;
    chat: string;
    history: string;
  };
};

export type Message = {
  type: "bot" | "instructions" | "user";
  message: string;
  options?: {
    text: string;
    action: string[];
  }[];
};

export type Chat = {
  id: string;
  date: string;
  messages: Message[];
};

export const DEFAULT_SETTINGS: UserSettings = {
  name: "You",
  assistant_name: "Jarvis",
  profile_picture:
    "https://st3.depositphotos.com/6672868/13701/v/450/depositphotos_137014128-stock-illustration-user-profile-icon.jpg",
  pre_prompt:
    "You are {assistant_name}, a virtual assistant for {name}. Your task is to help {name} with his daily tasks.",
  model_url:
    "https://theguywithouth-mistral-7b-chat.hf.space/--replicas/1suiu/",
  dark_mode: false,
  shortcuts: {
    settings: "CTRL + S",
    chat: "CTRL + D",
    history: "CTRL + H",
  },
};

export const STORE_KEYS: { [key: string]: keyof SchemaType } = {
  SETTINGS: "settings",
  CHATS: "chats",
};
