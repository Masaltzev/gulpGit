let exmp = document.getElementById("cnv"),
    cnt = exmp.getContext("2d");
// function paint(){
    let wF = document.getElementById("w").value,
        hF = document.getElementById("h").value;
    // return wF, hF;
// }
// paint();
// console.log(wF);
// cnt.strokeStyle = "#000";
// cnt.fillStyle = "blue";
// cnt.beginPath();
// cnt.arc(100,100,50,0,Math.PI*2,true);
// cnt.closePath();
// cnt.stroke();
// cnt.fill();



let wS = wF / (wF / 200 / (wF / hF));
let hS = hF / (hF / 200);
let w = 10;
let xMT = (400 - wS) / 2;
//Console.log(widthX);
let yMT = 0;
let xyMT = 0;
cnt.strokeStyle = 'gray';
cnt.fillStyle = '#f9f9f9';
cnt.beginPath(); //top --- 1\4---3/2---
cnt.moveTo(xMT, xyMT); //1
cnt.lineTo(xMT + wS, xyMT); //2
cnt.lineTo(xMT + wS - w, w); //3 win right
cnt.lineTo(xMT + w, w); //4 win left
cnt.closePath();
cnt.fill();
cnt.stroke();

cnt.beginPath(); //left --- 1\2---4/3---
cnt.moveTo(xMT, xyMT); //1
cnt.lineTo(xMT + w, w); //2
cnt.lineTo(xMT + w, hS - w); //3
cnt.lineTo(xMT, hS); //4
cnt.closePath();
cnt.fill();
cnt.stroke();

cnt.beginPath(); //bottom --- 1/4---3\2---
cnt.moveTo(xMT, hS); //1
cnt.lineTo(xMT + wS, hS); //3 win right
cnt.lineTo(xMT + wS - w, hS - w); //2
cnt.lineTo(xMT + w, hS - w); //4 win left
cnt.closePath();
cnt.fill();
cnt.stroke();

cnt.beginPath(); //right --- 4/1---3\2---
cnt.moveTo(xMT + wS, hS); //2
cnt.lineTo(xMT + wS - w, hS - w); //3
cnt.lineTo(xMT + wS - w, w); //4
cnt.lineTo(xMT + wS, xyMT); //1
cnt.closePath();
cnt.fill();
cnt.stroke();

cnt.strokeStyle = 'gray';
cnt.fillStyle = 'skyblue';
cnt.beginPath();
cnt.fillRect(xMT + w, w, (xMT + wS - xMT - w - w), (hS - w - w));
cnt.closePath();
cnt.fill();
cnt.stroke();