// Native
import { join } from "path";
import { format } from "url";

// Packages
import {
  BrowserWindow,
  app,
  ipcMain,
  IpcMainEvent,
  globalShortcut,
  Tray,
} from "electron";
import isDev from "electron-is-dev";
import prepareNext from "electron-next";
import ipc from "./ipc";
import { SchemaType } from "./store";
import Store from "electron-store";

let show = true;

// Initialize IPC handlers
const store = new Store<SchemaType>();
ipc.init(store);

// Prepare the renderer once the app is ready
app.on("ready", async () => {
  await prepareNext("./renderer");

  const icon = join(__dirname, "../renderer/out/icon4.png");

  const mainWindow = new BrowserWindow({
    width: 610,
    height: 680,
    frame: false,
    transparent: true,
    resizable: false,
    // // show: false,
    icon: icon,

    webPreferences: {
      nodeIntegration: false,
      sandbox: false,
      contextIsolation: true,
      preload: join(__dirname, "preload.js"),
    },
  });

  new Tray(icon);

  const url = isDev
    ? "http://localhost:8000/"
    : format({
        pathname: join(__dirname, "../renderer/out/index.html"),
        protocol: "file:",
        slashes: true,
      });

  if (isDev) {
    mainWindow.webContents.openDevTools({ mode: "detach" });
  }

  globalShortcut.register("CommandOrControl+Shift+I", () => {
    if (!mainWindow) {
      return;
    }
    if (show) {
      mainWindow.hide();
      show = false;
    } else {
      show = true;
      mainWindow.show();
    }
  });

  mainWindow.loadURL(url);
});

// Quit the app once all windows are closed
app.on("window-all-closed", app.quit);

app.on("will-quit", () => {
  // Unregister all shortcuts.
  globalShortcut.unregisterAll();
});

// listen the channel `message` and resend the received message to the renderer process
ipcMain.on("message", (event: IpcMainEvent, message: any) => {
  console.log(message);
  setTimeout(() => event.sender.send("message", "hi from electron"), 500);
});
