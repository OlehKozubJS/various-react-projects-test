import { LineComponent } from "./LineComponent";

const Parable = ({ scale }) => {
  let coordinates = [];
  for (let x = -10; x <= 10; x += 1 / scale) {
    if (x * x > 16) {
      continue;
    }
    const y1 = Math.pow(16 - x * x, 1 / 2);
    const y2 = (-y1 * x) / 4;
    coordinates = [
      ...coordinates,
      300 + x * scale,
      300 - y1 * scale,
      300 + x * scale,
      300 - y2 * scale,
    ];
  }

  return (
    <LineComponent
      points={coordinates}
      backgroundColor={"none"}
      borderColor={"magenta"}
    />
  );
};

export { Parable };
