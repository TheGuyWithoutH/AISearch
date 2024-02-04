import { client } from "@gradio/client";

export class LlmGeneration {
  [x: string]: any;

  constructor(loadedCallback: () => void, modelUrl?: string) {
    client(
      modelUrl ??
        "https://theguywithouth-mistral-7b-chat.hf.space/--replicas/1suiu/",
      {}
    ).then((app) => {
      this.app = app;
      app.view_api().then((api) => {
        console.log(api);
      });
      loadedCallback();
    });
  }

  generateResponse(text: string) {
    if (!this.app) {
      throw new Error("LLM not loaded");
      return;
    }
    return this.app.predict("/chat", [text, null]);
  }
}
