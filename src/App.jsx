import { LineComponent } from "./SVGComponents/LineComponent";

const App = () => {
  return (
    <>
      <svg
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
      </svg>
    </>
  );
};

export { App };
