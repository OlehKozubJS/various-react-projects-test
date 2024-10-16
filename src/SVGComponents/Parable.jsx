import { LineComponent } from "./LineComponent";

const Parable = ({ scale }) => {
  let coordinates = [];
  for (let x = -10; x <= 10; x += scale) {
    const y = Math.pow(x, 2);
    coordinates = [...coordinates, 300 + x / scale, 300 - y / scale];
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
