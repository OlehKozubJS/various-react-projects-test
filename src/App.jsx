import { useState } from "react";

import {
  SVGFieldComponent,
  ArrowComponent,
  GridComponent,
  Parable,
} from "./SVGComponents";

const App = () => {
  const [isSVG, setIsSVG] = useState(false);
  const openSVG = () => {
    setIsSVG(true);
  };
  const closeSVG = () => {
    setIsSVG(false);
  };

  const [isArrowComponent, setIsArrowComponent] = useState(false);
  const openArrowComponent = () => {
    setIsArrowComponent(true);
  };
  const closeArrowComponent = () => {
    setIsArrowComponent(false);
  };
  const [angle, setAngle] = useState(0);
  const handleTurn = (value) => {
    setAngle(value);
  };

  const [isParable, setIsParable] = useState(false);
  const openParable = () => {
    setIsParable(true);
  };
  const closeParable = () => {
    setIsParable(false);
  };
  const scale = 60;

  const [isGridComponent, setIsGridComponent] = useState(false);
  const openGridComponent = () => {
    setIsGridComponent(true);
  };
  const closeGridComponent = () => {
    setIsGridComponent(false);
  };

  return (
    <>
      <button type="button" onClick={isSVG ? closeSVG : openSVG}>
        {isSVG ? "Close" : "Open"} vector graphic field
      </button>
      {isSVG && (
        <>
          <SVGFieldComponent
            width="600px"
            height="600px"
            backgroundColor="rgb(240, 230, 250)"
          >
            {isArrowComponent && (
              <ArrowComponent
                x={300}
                y={300}
                onTurn={handleTurn}
                backgroundColor={"red"}
                borderColor={"blue"}
              />
            )}
            {isGridComponent && (
              <>
                <GridComponent
                  cellHeight={scale / 10}
                  cellWidth={scale / 10}
                  fieldHeight={600}
                  fieldWidth={600}
                  color="rgb(150, 150, 200)"
                />
                <GridComponent
                  cellHeight={scale}
                  cellWidth={scale}
                  fieldHeight={600}
                  fieldWidth={600}
                  color="rgb(100, 100, 200)"
                />
              </>
            )}
            {isParable && <Parable scale={scale} />}
          </SVGFieldComponent>
          <br />
          <button
            type="button"
            onClick={
              isArrowComponent ? closeArrowComponent : openArrowComponent
            }
          >
            {isArrowComponent ? "Close " : "Open "}arrow component
          </button>
          {isArrowComponent && `angle value: ${angle}`}
          <br />
          <button
            type="button"
            onClick={isParable ? closeParable : openParable}
          >
            {isParable ? "Close " : "Open "}parable
          </button>
          <br />
          <button
            type="button"
            onClick={isGridComponent ? closeGridComponent : openGridComponent}
          >
            {isGridComponent ? "Close " : "Open "}grid component
          </button>
        </>
      )}
    </>
  );
};

export { App };

/*



*/
