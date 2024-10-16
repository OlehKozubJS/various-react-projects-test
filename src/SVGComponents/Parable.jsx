import { LineComponent } from "./LineComponent";

const Parable = () => {
  let coordinates = [];
  for (let x = -10; x <= 10; x += 0.01) {
    const y = Math.pow(x, 2);
    coordinates = [...coordinates, 300 + x * 100, 300 - y * 100];
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
