function regularPolygon(x, y, l, angleNumber, angle) {
  var polygonArray = [];
  for (aa = 1; aa <= angleNumber; ++aa) {
    var xy = angleFunction(x, y, l, (360 / angleNumber) * aa + angle);
    polygonArray.push(xy);
  }
  var polygonString =
    "<polygon points='" + polygonArray.join(",") + "'></polygon>";
  return polygonString;
}

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
