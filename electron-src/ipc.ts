import { ipcMain } from "electron";
import { DEFAULT_SETTINGS, STORE_KEYS, SchemaType } from "./store";
import Store from "electron-store";

const init = (store: Store<SchemaType>) => {
  /**
   * IPC API
   * This is where we use native/server-side platform APIs (like NodeJS modules)
   */
  ipcMain.handle("getSettings", () => {
    if (!store.has(STORE_KEYS.SETTINGS)) {
      store.set(STORE_KEYS.SETTINGS, DEFAULT_SETTINGS);
    }
    return store.get(STORE_KEYS.SETTINGS);
  });

  ipcMain.handle(
    "setSettings",
    async (_, newSettings: Partial<SchemaType["settings"]>) => {
      const prevSettings = store.get(STORE_KEYS.SETTINGS);
      //@ts-ignore
      store.set(STORE_KEYS.SETTINGS, { ...prevSettings, ...newSettings });
    }
  );

  ipcMain.handle("getChats", () => {
    if (!store.has(STORE_KEYS.CHATS)) {
      store.set(STORE_KEYS.CHATS, []);
    }
    return store.get(STORE_KEYS.CHATS);
  });

  ipcMain.handle("setChats", async (_, newChats: SchemaType["chats"]) => {
    store.set(STORE_KEYS.CHATS, newChats);
  });

  ipcMain.handle("clearChats", async () => {
    store.set(STORE_KEYS.CHATS, []);
  });
};

export default {
  init,
};
