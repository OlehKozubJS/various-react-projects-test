import { LineComponent } from "./SVGComponents/RadiantLineComponent";

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
        <LineComponent />
      </svg>
    </>
  );
};

export { App };
