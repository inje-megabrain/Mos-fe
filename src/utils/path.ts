export const getNearEntryName = (path: string) => {
  return path.substring(path.lastIndexOf("/") + 1);
};

export const dividePath = (path: string) => {
  return path.split("/");
};
