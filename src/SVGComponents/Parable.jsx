import { LineComponent } from "./LineComponent";

const Parable = () => {
  let coordinates = [];
  for (let x = 0; x <= 10; x += 0.1) {
    const y = Math.pow(x, 2);
    coordinates = [...coordinates, x * 10, y * 10];
  }

  return <LineComponent points={coordinates} />;
};

export { Parable };
