import { LineComponent } from "./SVGComponents";

const GridComponent = () => {
  let horizontalCoordinates = [];

  for (let x = 0; x <= 1000; x += 10) {
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
            <LineComponent
              key={item}
              points={[0, item, 1000, item]}
              backgroundColor="blue"
              borderColor="red"
            />
          </>
        );
      })}
    </>
  );
};

export { App };
