import * as Gradio from '@gradio/client';

export class LlmGeneration {
  [x: string]: any;

  constructor(loadedCallback: () => void) {
    // client(
    //   'https://theguywithouth-mistral-7b-chat.hf.space/--replicas/1suiu/',
    //   {},
    // ).then((app) => {
    //   this.app = app;
    //   console.log(app.config);
    //   app.view_api().then((api) => {
    //     console.log(api);
    //   });
    //   loadedCallback();
    // });
    console.log(Gradio);
  }

  generateResponse(text: string) {
    if (!this.app) {
      throw new Error('LLM not loaded');
      return;
    }
    return this.app.predict('/chat', [text, null]);
  }
}
