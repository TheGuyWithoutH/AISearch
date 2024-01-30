const isDev = process.env.NODE_ENV === "development";
const NEXT_PROD_DIR = "/renderer/out";

export const getLink = (path: string, currentPath: string) => {
  if (isDev) {
    return path;
  }

  const directory = currentPath.substring(
    0,
    currentPath.indexOf(NEXT_PROD_DIR) + NEXT_PROD_DIR.length
  );

  return "file:///" + directory + path + ".html";
};
