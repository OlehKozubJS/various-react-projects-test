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
          backgroundColor: "rgb(200, 150, 250)",
        }}
      >
        <LineString x1={10} y1={20} x2={30} y2={40}></LineString>
      </svg>
    </>
  );
};

export { App };
