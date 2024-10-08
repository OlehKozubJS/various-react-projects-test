function turtle(x, y, turn, upOrDown) {
  var polygonArray = [];
  polygonArray.push(angleFunction(x, y, 10, -90 + turn));
  polygonArray.push(angleFunction(x, y, 30, turn));
  polygonArray.push(angleFunction(x, y, 10, 90 + turn));
  var polygonString =
    "<polygon class='turtle " +
    upOrDown +
    "' points='" +
    polygonArray.join(",") +
    "'></polygon>";
  return polygonString;
}
