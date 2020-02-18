// let exmp = document.getElementById("cnv"),
//     cnt = exmp.getContext("2d");
// function paint(){
//     let wF = document.getElementById("w").value,
//         hF = document.getElementById("h").value;
    // return wF, hF;
// }
// paint();
// console.log(document.getElementById("w").value);
// cnt.strokeStyle = "#000";
// cnt.fillStyle = "blue";
// cnt.beginPath();
// cnt.arc(100,100,50,0,Math.PI*2,true);
// cnt.closePath();
// cnt.stroke();
// cnt.fill();



// let wS = wF / (wF / 200 / (wF / hF));
// let hS = hF / (hF / 200);
// let w = 10;
// let xMT = (400 - wS) / 2;
// //Console.log(widthX);
// let yMT = 0;
// let xyMT = 0;
// cnt.strokeStyle = 'gray';
// cnt.fillStyle = '#f9f9f9';
// cnt.beginPath(); //top --- 1\4---3/2---
// cnt.moveTo(xMT, xyMT); //1
// cnt.lineTo(xMT + wS, xyMT); //2
// cnt.lineTo(xMT + wS - w, w); //3 win right
// cnt.lineTo(xMT + w, w); //4 win left
// cnt.closePath();
// cnt.fill();
// cnt.stroke();
//
// cnt.beginPath(); //left --- 1\2---4/3---
// cnt.moveTo(xMT, xyMT); //1
// cnt.lineTo(xMT + w, w); //2
// cnt.lineTo(xMT + w, hS - w); //3
// cnt.lineTo(xMT, hS); //4
// cnt.closePath();
// cnt.fill();
// cnt.stroke();
//
// cnt.beginPath(); //bottom --- 1/4---3\2---
// cnt.moveTo(xMT, hS); //1
// cnt.lineTo(xMT + wS, hS); //3 win right
// cnt.lineTo(xMT + wS - w, hS - w); //2
// cnt.lineTo(xMT + w, hS - w); //4 win left
// cnt.closePath();
// cnt.fill();
// cnt.stroke();
//
// cnt.beginPath(); //right --- 4/1---3\2---
// cnt.moveTo(xMT + wS, hS); //2
// cnt.lineTo(xMT + wS - w, hS - w); //3
// cnt.lineTo(xMT + wS - w, w); //4
// cnt.lineTo(xMT + wS, xyMT); //1
// cnt.closePath();
// cnt.fill();
// cnt.stroke();
//
// cnt.strokeStyle = 'gray';
// cnt.fillStyle = 'skyblue';
// cnt.beginPath();
// cnt.fillRect(xMT + w, w, (xMT + wS - xMT - w - w), (hS - w - w));
// cnt.closePath();
// cnt.fill();
// cnt.stroke();



let exmp2 = document.getElementById("cnv2"),
    cnt2 = exmp2.getContext("2d");

let widthSize = 1300/10;
let heightSize = 1400/10;
let zeroSizeW = (exmp2.width - widthSize)/2;
let zeroSizeH = (exmp2.height - heightSize)/2;
let size = [zeroSizeW,zeroSizeH,widthSize+zeroSizeW,heightSize+zeroSizeH];
console.log(zeroSizeW, zeroSizeH, widthSize, heightSize);

cnt2.strokeStyle = 'rgba(0,0,0,0.71)';
// cnt2.fillStyle = 'rgba(0,0,0,0.01)';

contour1();
contour2();
contour3();
contour4();

function contour1() {
    cnt2.fillStyle = 'rgb(32,255,5)';
    cnt2.beginPath();
    cnt2.moveTo(size[0], size[1]);
    cnt2.lineTo(size[2], size[1]);
    cnt2.lineTo(size[2] - 6.3, size[1] + 6.3);
    cnt2.lineTo(size[0] + 6.3, size[1] + 6.3);
    cnt2.closePath();
    cnt2.fill();
    cnt2.stroke();
    
    $(function () {
        $('#cnv2').css('background', 'orange');
    })
}
function contour2() {
    cnt2.fillStyle = 'rgb(255,165,9)';
    cnt2.beginPath();
    cnt2.moveTo(size[2], size[1]);
    cnt2.lineTo(size[2], size[3]);
    cnt2.lineTo(size[2] - 6.3, size[3] - 6.3);
    cnt2.lineTo(size[2] - 6.3, size[1] + 6.3);
    cnt2.closePath();
    cnt2.fill();
    cnt2.stroke();
}
function contour3() {
    cnt2.fillStyle = 'rgb(255,23,180)';
    cnt2.beginPath();
    cnt2.moveTo(size[2], size[3]);
    cnt2.lineTo(size[0], size[3]);
    cnt2.lineTo(size[0] + 6.3, size[3] - 6.3);
    cnt2.lineTo(size[2] - 6.3, size[3] - 6.3);
    cnt2.closePath();
    cnt2.fill();
    cnt2.stroke();
}
function contour4() {
    cnt2.fillStyle = 'rgb(37,13,255)';
    cnt2.beginPath();
    cnt2.moveTo(size[0],size[3]);
    cnt2.lineTo(size[0],size[1]);
    cnt2.lineTo(size[0]+6.3,size[1]+6.3);
    cnt2.lineTo(size[0]+6.3,size[3]-6.3);
    cnt2.closePath();
    cnt2.fill();
    cnt2.stroke();
}


// document.querySelector('circle').addEventListener('click', e => {
//     e.target.style.fill = "#ffa509";
// });

var s = Snap("#svg");
var circle = s.circle(20,20,10);