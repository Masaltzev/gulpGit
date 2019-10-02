var example = document.getElementById("cl"),
	context = example.getContext('2d');


function paint() {
	let widthX = document.getElementById('fWidth').value;
	let heigthY = document.getElementById('fHeight').value;
	return widthX, heigthY;
}

console.log(widthX);
console.log('Козлы');


var wS = widthX / (widthX / 200 / (widthX / heigthY));
var hS = heigthY / (heigthY / 200);
var w = 10;
var xMT = (400 - wS) / 2;
//Console.log(widthX);
var yMT = 0;
var xyMT = 0;
context.strokeStyle = 'gray';
context.fillStyle = '#f9f9f9';
context.beginPath(); //top --- 1\4---3/2---
context.moveTo(xMT, xyMT); //1
context.lineTo(xMT + wS, xyMT); //2
context.lineTo(xMT + wS - w, w); //3 win right
context.lineTo(xMT + w, w); //4 win left
context.closePath();
context.fill();
context.stroke();

context.beginPath(); //left --- 1\2---4/3---
context.moveTo(xMT, xyMT); //1
context.lineTo(xMT + w, w); //2
context.lineTo(xMT + w, hS - w); //3
context.lineTo(xMT, hS); //4
context.closePath();
context.fill();
context.stroke();

context.beginPath(); //bottom --- 1/4---3\2---
context.moveTo(xMT, hS); //1
context.lineTo(xMT + wS, hS); //3 win right
context.lineTo(xMT + wS - w, hS - w); //2
context.lineTo(xMT + w, hS - w); //4 win left
context.closePath();
context.fill();
context.stroke();

context.beginPath(); //right --- 4/1---3\2---
context.moveTo(xMT + wS, hS); //2
context.lineTo(xMT + wS - w, hS - w); //3
context.lineTo(xMT + wS - w, w); //4
context.lineTo(xMT + wS, xyMT); //1
context.closePath();
context.fill();
context.stroke();

context.strokeStyle = 'gray';
context.fillStyle = 'skyblue';
context.beginPath();
context.fillRect(xMT + w, w, (xMT + wS - xMT - w - w), (hS - w - w));
context.closePath();
context.fill();
context.stroke();