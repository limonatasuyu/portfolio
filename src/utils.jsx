import { Pages } from "./pages/Pages";

export function isPointInRadius(somePoint, radius) {
  //eslint-disable-next-line no-unused-vars
  const [pointX, pointY, pointZ] = somePoint;
  for (const page of Pages) {
    //eslint-disable-next-line no-unused-vars
    const [x, y, z] = page.position;
    const distance = Math.sqrt((pointX - x) ** 2 + (pointZ - z) ** 2);
    if (distance <= radius) {
      return page.name;
    }
  }
  return false;
}
