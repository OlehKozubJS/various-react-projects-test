// My own library of functions

function sinFunc (arg) {
    return Math.sin(Math.PI / 180 * arg);
}

function cosFunc (arg) {
    return Math.cos(Math.PI / 180 * arg);
}

function lineString (x1, y1, x2, y2) {
    return "<polyline points='" + x1 + " " + y1 + ",  " + x2 + " " + y2 + "'></polyline>";
}

function lineCString (x1, y1, x2, y2, clr) {
    return "<polyline style='stroke:" + clr + ";' points='" + x1 + " " + y1 + ",  " + x2 + " " + y2 + "'></polyline>";
}

function angleFunction (x, y, l, angle) {
    return [x + l * cosFunc (angle), y + l * sinFunc (angle)];
}

function radiantLineString (x, y, l, angle) {
    return lineString (x, y, angleFunction (x, y, l, angle)[0], angleFunction (x, y, l, angle)[1]);
}

function radiantLineCString (x, y, l, angle, clr) {
    return lineCString (x, y, angleFunction (x, y, l, angle)[0], angleFunction (x, y, l, angle)[1], clr);
}

function fdiv (idArg, textArg) {
    return "<div id='" + idArg + "'>" + textArg + "</div>";
}

function fspan (idArg, textArg) {
    return "<span id='" + idArg + "'>" + textArg + "</span>";
}

function finput (idArg, typeArg, textArg) {
    return "<input id='" + idArg + "' type='" + typeArg + "' placeholder='" + textArg + "'></input>";
}

function fbutton (idArg, funcArg, textArg) {
    return "<button id='" + idArg + "' onclick='" + funcArg + "'>" + textArg + "</button>";
}

function ftext (x, y, text, argument) {
    return "<text x='" + x + "' y='" + y + "' onclick='mainFunction('" + argument + "')'>" + text + "</text>";
}

function regularPolygon (x, y, l, angleNumber, angle) {
    var polygonArray = [];
    for (aa = 1; aa <= angleNumber; ++aa) {
        var xy = angleFunction (x, y, l, 360 / angleNumber * aa + angle);
        polygonArray.push(xy);
    }
    var polygonString = "<polygon points='" + polygonArray.join(',') + "'></polygon>";
    return polygonString;
}

function turtle (x, y, turn, upOrDown) {
    var polygonArray = [];
    polygonArray.push (angleFunction (x, y, 10, -90 + turn));
    polygonArray.push (angleFunction (x, y, 30, turn));
    polygonArray.push (angleFunction (x, y, 10, 90 + turn));
    var polygonString = "<polygon class='turtle " + upOrDown + "' points='" + polygonArray.join(',') + "'></polygon>";
    return polygonString;
}