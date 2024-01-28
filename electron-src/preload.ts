/* eslint-disable @typescript-eslint/no-namespace */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { app, contextBridge, ipcRenderer } from "electron";
import { IpcRendererEvent } from "electron/main";
import fs from "fs";

type UserConfig = {
  name: string;
  assistant_name: string;
  dark_mode: boolean;
};

// We are using the context bridge to securely expose NodeAPIs.
// Please note that many Node APIs grant access to local system resources.
// Be very cautious about which globals and APIs you expose to untrusted remote content.
contextBridge.exposeInMainWorld("electron", {
  sayHello: () => ipcRenderer.send("message", "hi from next"),
  receiveHello: (handler: (event: IpcRendererEvent, ...args: any[]) => void) =>
    ipcRenderer.on("message", handler),
  stopReceivingHello: (
    handler: (event: IpcRendererEvent, ...args: any[]) => void
  ) => ipcRenderer.removeListener("message", handler),

  // Data API for the renderer process stored in AppData.
  setUserConfig: (userConfig: UserConfig) => {
    const configurationPath = app.getPath("userData");
    const userData = JSON.stringify(userConfig);
    fs.writeFile(`${configurationPath}/user-data.json`, userData, (err) => {
      if (err) {
        console.log(err);
      }
    });
  },
  getUserConfig: () => {
    new Promise((resolve, reject) => {
      const configurationPath = app.getPath("userData");
      fs.readFile(
        `${configurationPath}/user-data.json`,
        { encoding: "utf-8" },
        (err, data) => {
          if (err) {
            console.log(err);
            reject(err);
          }
          resolve(JSON.parse(data));
        }
      );
    });
  },
});
