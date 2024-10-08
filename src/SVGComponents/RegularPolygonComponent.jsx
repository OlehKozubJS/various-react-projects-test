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
