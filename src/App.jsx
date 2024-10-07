import { LineString } from "./LineString";

const App = () => {
  return (
    <>
      Hello!
      <br />
      I am VioletFox!
      <br />
      Progress Wins Again!
      <br />
      Keroberos
      <br />
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
