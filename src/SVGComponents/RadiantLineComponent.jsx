import { LineComponent } from "./LineComponent";

const RadiantLineComponent = ({ x, y, backgroundColor, borderColor }) => {
  const sinFunc = (angle) => {
    return Math.sin((Math.PI / 180) * angle);
  };

  const cosFunc = (angle) => {
    return Math.cos((Math.PI / 180) * angle);
  };

  function angleFunction(x, y, l, angle) {
    return [x + l * cosFunc(angle), y + l * sinFunc(angle)];
  }

  return (<LineComponent points={[x,
    y,
    angleFunction(x, y, l, angle)[0],
    angleFunction(x, y, l, angle)[1]
    
    ]} backgroundColor borderColor /> 
};

export { RadiantLineComponent };
