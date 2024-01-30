# AISearch 🪄

AISearch is a desktop application that allows users to quickly access an open source AI chat. With a single shortcut, users can open the application and begin chatting with the AI they want to use.

It is compatible with Windows, MacOS, and Linux. Any model with a Gradio chat API can be added to the application.

![AISearch bar](docs/illustration.png)

AISearch v1.0.0 is currently in development. The first release will come soon!

## Installation

To install the application, download the repository and run `npm install` in the root directory. Then, run `npm run dist` to start the application.

You will then find the application in the `dist` folder. (Currently, only Windows is supported. Support for Windows and Linux is coming soon!)

## Development

This app is based on the [Next.js Electron example](https://github.com/vercel/next.js/tree/canary/examples/with-electron-typescript), and use Gradio with a HuggingFace Spaces model for the chat.

The next features to be added are:

- [ ] Customizable shortcuts and profile pictures
- [ ] Persistent chat history
- [ ] Navigation Improvements
- [ ] Chat text formatting
- [ ] Support for MacOS and Linux

## Contributing

Contributions are welcome! Please open an issue or pull request if you have any suggestions or bug fixes.

## License

This project is licensed under the Apache 2.0 License - see the [LICENSE](LICENSE) file for details.
