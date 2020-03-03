let svgTop = document.querySelector("polygon.top"),
    svgLeft = document.querySelector('polygon.left'),
    svgBottom = document.querySelector("polygon.bottom"),
    svgRight = document.querySelector("polygon.right"),
    svgImpost = document.querySelector("rect.impost"),
    checkedImpost = document.getElementById('checkImpost'),
    inputW, inputH, ramaWidth, impostWidth, x, y, svg, k;


function getInput() {
    inputW = document.querySelector(".inputW").value / k;
    inputH = document.querySelector(".inputH").value / k;
    svg = $('svg').width();
    x = (svg / 2) - (inputW / 2);
    y = 20;
}


getInput();

k = 7;
ramaWidth = 63 / k;
impostWidth = 82 / k;

function go() {
    getInput();
    let pointsTop = [x, y, inputW + x, y, inputW + x - ramaWidth, y + ramaWidth, x + ramaWidth, y + ramaWidth],
        pointsLeft = [x, y, x + ramaWidth, y + ramaWidth, x + ramaWidth, inputH + y - ramaWidth, x, inputH + y,],
        pointsBottom = [x, inputH + y, x + ramaWidth, inputH + y - ramaWidth, inputW + x - ramaWidth, inputH + y - ramaWidth, inputW + x, inputH + y],
        pointsRight = [inputW + x, inputH + y, inputW + x - ramaWidth, inputH + y - ramaWidth, inputW + x - ramaWidth, y + ramaWidth, inputW + x, y],
        pointsImpost = [((inputW / 2) - (impostWidth / 2) + x), y + ramaWidth, impostWidth, inputH - (ramaWidth * 2)];
    svgTop.setAttribute("points", pointsTop.join(" "));
    svgLeft.setAttribute("points", pointsLeft.join(" "));
    svgBottom.setAttribute("points", pointsBottom.join(" "));
    svgRight.setAttribute("points", pointsRight.join(" "));

    if (checkedImpost.checked === true) {
        svgImpost.setAttribute("x", pointsImpost[0]);
        svgImpost.setAttribute("y", pointsImpost[1]);
        svgImpost.setAttribute("width", pointsImpost[2]);
        svgImpost.setAttribute("height", pointsImpost[3]);
    } else {
        svgImpost.removeAttribute("x");
        svgImpost.removeAttribute("y");
        svgImpost.removeAttribute("width");
        svgImpost.removeAttribute("height");
    }


    // console.log(pointsTop.join(" "));
    // console.log(pointsLeft.join(" "));
    // console.log(pointsBottom.join(" "));
    // console.log(pointsRight.join(" "));
    // console.log(pointsImpost.join(" "));
}
