import {
  SVGFieldComponent,
  LineComponent,
  RadiantLineComponent,
} from "./SVGComponents";

const App = () => {
  return (
    <>
      <SVGFieldComponent
        style={{
          width: "300px",
          height: "300px",
          backgroundColor: "rgb(240, 230, 250)",
        }}
      >
        <LineComponent
          points={[0, 0, 50, 50, 100, 50]}
          backgroundColor={"none"}
          borderColor={"red"}
        />
      </SVGFieldComponent>
    </>
  );
};

export { App };
