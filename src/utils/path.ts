export const getNearEntryName = (path: string) => {
  return path.substring(path.lastIndexOf("/") + 1);
};

export const dividePath = (path: string) => {
  return path.slice(path[0] === "/" ? 1 : 0).split("/");
};

export const makePath = (path: string, target: string) => {
  return path.length === 1 ? `/${target}` : path + "/" + target;
};
