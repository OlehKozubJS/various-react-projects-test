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
      {horizontalCoordinates.map((item) => {
        return (
          <>
            <LineComponent
              key={item}
              points={[item, 0, item, 1000]}
              backgroundColor="blue"
              borderColor="red"
            />
        )
      }
      {verticalCoordinates.map((item) =>{
            return(<LineComponent
              key={item}
              points={[0, item, 1000, item]}
              backgroundColor="blue"
              borderColor="red"
            />

        );
      }
    </>
  );
};

export { GridComponent };
