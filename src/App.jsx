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
        <LineString
          x1={10}
          y1={20}
          x2={130}
          y2={40}
          stroke={"rgb(250, 150, 200)"}
        ></LineString>
      </svg>
    </>
  );
};

export { App };
