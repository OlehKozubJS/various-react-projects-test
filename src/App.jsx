import {
  SVGFieldComponent,
  LineComponent,
  RadiantLineComponent,
} from "./SVGComponents";

const App = () => {
  return (
    <>
      <SVGFieldComponent
        width="300px"
        height="300px"
        backgroundColor="rgb(240, 230, 250)"
      >
        <LineComponent
          points={[0, 0, 50, 50, 100, 50]}
          backgroundColor={"none"}
          borderColor={"red"}
        />
        <RadiantLineComponent
          x={150}
          y={65}
          length={125}
          angle={10}
          backgroundColor={"none"}
          borderColor={"rgb(200, 180, 120)"}
        />
      </SVGFieldComponent>
    </>
  );
};

export { App };
