type UserConfig = {
  name: string;
  assistant_name: string;
  dark_mode: boolean;
};

export const getUserConfig = async () => {
  return window.electron.getUserConfig();
};

export const setUserConfig = async (userConfig: UserConfig) => {
  return window.electron.setUserConfig(userConfig);
};
