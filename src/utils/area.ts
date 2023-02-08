import { AreaType } from "../types/area";

function makeArea(top: number, left: number, width: number, height: number) {
  return {
    top,
    left,
    width,
    height,
  };
}

export const normalize = (area: AreaType) => {
  const h = area.end.y - area.start.y;
  const w = area.end.x - area.start.x;

  if (h > 0) {
    if (w > 0) return makeArea(area.start.y, area.start.x, w, h);
    return makeArea(area.start.y, area.end.x, -w, h);
  } else {
    if (w > 0) return makeArea(area.end.y, area.start.x, w, -h);
    return makeArea(area.end.y, area.end.x, -w, -h);
  }
};
