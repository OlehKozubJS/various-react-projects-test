import { LineComponent } from "./LineComponent";

const GridComponent = ({ fieldHeight, fieldWidth, cellHeight, cellWidth }) => {
  let horizontalCoordinates = [];
  let verticalCoordinates = [];

  for (let y = 0; y <= fieldHeight; y += cellHeight) {
    verticalCoordinates = [...verticalCoordinates, y];
  }

  for (let x = 0; x <= fieldWidth; x += cellWidth) {
    horizontalCoordinates = [...horizontalCoordinates, x];
  }

  return (
    <>
      {verticalCoordinates.map((height) => {
        return (
          <LineComponent
            key={height}
            points={[0, height, fieldWidth, height]}
            backgroundColor="blue"
            borderColor="red"
          />
        );
      })}
      {horizontalCoordinates.map((width) => {
        return (
          <LineComponent
            key={width}
            points={[width, 0, width, fieldHeight]}
            backgroundColor="blue"
            borderColor="red"
          />
        );
      })}
    </>
  );
};

export { GridComponent };
