export type SchemaType = {
  settings: UserSettings;
};

export type UserSettings = {
  name: string;
  assistant_name: string;
  pre_prompt: string;
  model_url: string;
  dark_mode: boolean;
};

export const DEFAULT_SETTINGS: UserSettings = {
  name: "You",
  assistant_name: "Jarvis",
  pre_prompt:
    "You are {assistant_name}, a virtual assistant for {name}. Your task is to help {name} with his daily tasks.",
  model_url:
    "https://theguywithouth-mistral-7b-chat.hf.space/--replicas/1suiu/",
  dark_mode: false,
};

export const STORE_KEYS: { [key: string]: keyof SchemaType } = {
  SETTINGS: "settings",
};
