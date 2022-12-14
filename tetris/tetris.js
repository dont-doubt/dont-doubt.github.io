/* Рисует закруглённый квадрат */
CanvasRenderingContext2D.prototype.roundRect = function(x, y, w, h, r) {
	if (w < 2 * r) r = w / 2;
	if (h < 2 * r) r = h / 2;
	this.beginPath();
	this.moveTo(x+r, y);
	this.arcTo(x+w, y,   x+w, y+h, r);
	this.arcTo(x+w, y+h, x,   y+h, r);
	this.arcTo(x,   y+h, x,   y,   r);
	this.arcTo(x,   y,   x+w, y,   r);
	this.closePath();
	this.fill();
}

class Shape {
	constructor(template, color) {
		this.template = template;
		this.color = color;
	}
}

const X = 1;
const shapes = [
	new Shape([
		[0, 0, 0, 0, 0],
		[0, 0, X, X, 0],
		[0, X, X, 0, 0],
		[0, 0, X, 0, 0],
		[0, 0, 0, 0, 0]
	], "rgb(240,65,65)"),
	new Shape([
		[0, 0, 0, 0, 0],
		[0, X, X, 0, 0],
		[0, 0, X, X, 0],
		[0, 0, X, 0, 0],
		[0, 0, 0, 0, 0]
	], "rgb(240,123,65)"),
	new Shape([
		[0, 0, X, 0, 0],
		[0, 0, X, 0, 0],
		[0, 0, X, 0, 0],
		[0, X, X, 0, 0],
		[0, 0, 0, 0, 0]
	], "rgb(240,181,65)"),
	new Shape([
		[0, 0, X, 0, 0],
		[0, 0, X, 0, 0],
		[0, 0, X, 0, 0],
		[0, 0, X, X, 0],
		[0, 0, 0, 0, 0]
	], "rgb(240,240,65)"),
	new Shape([
		[0, 0, 0, 0, 0],
		[0, X, X, 0, 0],
		[0, X, X, 0, 0],
		[0, 0, X, 0, 0],
		[0, 0, 0, 0, 0]
	], "rgb(181,240,65)"),
	new Shape([
		[0, 0, 0, 0, 0],
		[0, 0, X, X, 0],
		[0, 0, X, X, 0],
		[0, 0, X, 0, 0],
		[0, 0, 0, 0, 0]
	], "rgb(123,240,65)"),
	new Shape([
		[0, 0, X, 0, 0],
		[0, 0, X, 0, 0],
		[0, X, X, 0, 0],
		[0, X, 0, 0, 0],
		[0, 0, 0, 0, 0]
	], "rgb(65,240,65)"),
	new Shape([
		[0, 0, X, 0, 0],
		[0, 0, X, 0, 0],
		[0, 0, X, X, 0],
		[0, 0, 0, X, 0],
		[0, 0, 0, 0, 0]
	], "rgb(65,240,123)"),
	new Shape([
		[0, 0, 0, 0, 0],
		[0, X, X, X, 0],
		[0, 0, X, 0, 0],
		[0, 0, X, 0, 0],
		[0, 0, 0, 0, 0]
	], "rgb(65,240,181)"),
	new Shape([
		[0, 0, X, 0, 0],
		[0, 0, X, 0, 0],
		[0, 0, X, 0, 0],
		[0, 0, X, 0, 0],
		[0, 0, X, 0, 0]
	], "rgb(65,240,240)"),
	new Shape([
		[0, 0, 0, 0, 0],
		[0, X, 0, X, 0],
		[0, X, X, X, 0],
		[0, 0, 0, 0, 0],
		[0, 0, 0, 0, 0]
	], "rgb(65,181,240)"),
	new Shape([
		[0, 0, 0, 0, 0],
		[0, 0, 0, X, 0],
		[0, 0, 0, X, 0],
		[0, X, X, X, 0],
		[0, 0, 0, 0, 0]
	], "rgb(65,123,240)"),
	new Shape([
		[0, 0, 0, 0, 0],
		[0, 0, 0, X, 0],
		[0, 0, X, X, 0],
		[0, X, X, 0, 0],
		[0, 0, 0, 0, 0]
	], "rgb(65,65,240)"),
	new Shape([
		[0, 0, 0, 0, 0],
		[0, 0, X, 0, 0],
		[0, X, X, X, 0],
		[0, 0, X, 0, 0],
		[0, 0, 0, 0, 0]
	], "rgb(123,65,240)"),
	new Shape([
		[0, 0, 0, 0, 0],
		[0, 0, X, 0, 0],
		[0, X, X, 0, 0],
		[0, 0, X, 0, 0],
		[0, 0, X, 0, 0]
	], "rgb(181,65,240)"),
	new Shape([
		[0, 0, 0, 0, 0],
		[0, 0, X, 0, 0],
		[0, 0, X, X, 0],
		[0, 0, X, 0, 0],
		[0, 0, X, 0, 0]
	], "rgb(240,65,240)"),
	new Shape([
		[0, 0, 0, 0, 0],
		[0, 0, X, X, 0],
		[0, 0, X, 0, 0],
		[0, X, X, 0, 0],
		[0, 0, 0, 0, 0]
	], "rgb(240,65,181)"),
	new Shape([
		[0, 0, 0, 0, 0],
		[0, X, X, 0, 0],
		[0, 0, X, 0, 0],
		[0, 0, X, X, 0],
		[0, 0, 0, 0, 0]
	], "rgb(240,65,123)")
]

class Figure {
	constructor(shape) {
		this.shape = shape;
		this.color = shape.color;
		this.a = [];
		for (let x=0; x<5; x++)
			for (let y=0; y<5; y++)
				if (shape.template[x][y] != 0) this.a.push({x: x+3, y: y-1});
		this.center = {x:5, y:1};
		// if (!check) dead = true;
	}
}

const canvas = document.getElementById("canvas"); // Полотно для рисования
const ctx = canvas.getContext("2d"); // Кисть для рисования на полотне
const canvasNext = document.getElementById("nextcanvas");
const ctxNext = canvasNext.getContext("2d");
const canvasSwap = document.getElementById("swapcanvas");
const ctxSwap = canvasSwap.getContext("2d");
const canvasScore = document.getElementById("scorecanvas");
const ctxScore = canvasScore.getContext("2d");

const sqX = 11, sqY = 20;
const size = 40;
const msize = size / 2;

let gameSpeed = 0;
let intervalID = -1;

let board;

let curr;
let copy;
let next;
let t = 0;
let swap;
let swapped;
let score;
let dead;

let setGameSpeed = (speed) => {
	if (intervalID != -1) clearInterval(intervalID);
	if (speed > 0) intervalID = setInterval(update, 1000 / speed);
	gameSpeed = speed;
}

let createTetris = () => {
	canvas.width = sqX * size;
	canvas.height = sqY * size;
	canvasSwap.width = msize*5+3;
	canvasSwap.height = msize*5+3;
	canvasNext.width = msize*5+3;
	canvasNext.height = msize*3*5+3;
	canvasScore.height = 80;
	canvasScore.width = 180;
	setInterval(draw, 1000 / 24);
	runTetris();
}

let runTetris = () => {
	board = [];
	for (let y=0; y<sqY; y++) {
		let line = [];
		for (let x=0; x<sqX; x++) line.push(-1);
		board.push(line);
	}
	setGameSpeed(1);
	curr = new Figure(getRandomShape());
	next = [getRandomShape(), getRandomShape(), getRandomShape()];
	swap = null;
	swapped = false;
	score = 0;
	dead = false;
}

let getRandomShape = () => {
	let shape = shapes[Math.floor(Math.random() * shapes.length)];
	if (next !== undefined && next.includes(shape)) return getRandomShape();
	return shape;
}

let createCopy = () => {
	copy = {a: curr.a.map(c => {return {...c}}), center: {x: curr.center.x, y: curr.center.y}};
}

let check = () => {
	for (let i=0; i<5; i++)
		if (curr.a[i].x<0 || curr.a[i].x>=sqX || curr.a[i].y>=sqY || (curr.a[i].y>=0 && board[curr.a[i].y][curr.a[i].x] != -1)) {
			for (let i=0; i<5; i++) curr.a[i] = copy.a[i];
			curr.center = copy.center;
			return true;
		}
	return false;
}

let update = () => {
	createCopy();
	for (let i=0; i<5; i++) curr.a[i].y+=1;
	curr.center.y += 1;
	if (check()) {
		if (!t) t = Date.now();
		if (Date.now() - t > 70) {
			for (let i=0; i<5; i++) board[curr.a[i].y][curr.a[i].x] = curr.color;
			curr = new Figure(next.shift());
			next.push(getRandomShape());
			score += 110 + Math.round(Math.random()*20)*10;
			for (let y=0; y<sqY; y++) {
				let comp = true;
				for (let x=0; x<sqX; x++) if (board[y][x] == -1) comp = false;
				if (comp) {
					for (let i=y; i>0; i--) board[i] = board[i - 1];
					let l = [];
					for (let i=0; i<sqX; i++) l.push(-1);
					board[0] = l;
					score += 440 + Math.round(Math.random()*20)*10;
				}
			}
			t = 0;
			swapped = false;
		};
	} else {
		t = 0;
	}
	draw();
}

let icb = 235;

let draw = () => {
	ctx.clearRect(0, 0, canvas.width, canvas.height);
	// ctx.fillStyle = "rgb(22,22,29)";

	const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
	gradient.addColorStop(0, "rgb(22,22,29)");
	gradient.addColorStop(1, hsv(Date.now()/10000, 0.2, 0.3));
	ctx.fillStyle = gradient;
	ctx.roundRect(0, 0, canvas.width, canvas.height, 10);

	///// Падающая фигура /////
	ctx.shadowBlur = 10;
	ctx.fillStyle = ctx.shadowColor = curr.color;
	for (let i=0; i<5; i++) 
		if (curr.a[i].y<sqY) 
			ctx.roundRect(curr.a[i].x * size + 1, curr.a[i].y * size + 1, size - 2, size - 2, 7);
	
	///// Доска /////
	for (let y = 0; y < sqY; y++) {
		for (let x = 0; x < sqX; x++) {
			if (board[y][x] != -1) {
				ctx.fillStyle = ctx.shadowColor = board[y][x];
				ctx.roundRect(x * size + 1, y * size + 1, size - 2, size - 2, 7);
			}
		}
	}
	ctx.shadowBlur = 0;

	///// Замена фигуры /////
	ctxSwap.clearRect(0, 0, canvasSwap.width, canvasSwap.height);
	ctxSwap.fillStyle = gradient;
	ctxSwap.roundRect(0, 0, canvasSwap.width, canvasSwap.height, 10);
	if (swap != null) {
		for (let x=0; x<5; x++) {
			for (let y=0; y<5; y++) {
				if (swap.template[x][y] != 0) {
					ctxSwap.fillStyle = swap.color;
					ctxSwap.roundRect(x * msize + 2, y * msize + 2, msize - 1, msize - 1, 5);
				}
			}
		}
	}

	///// Последующие фигуры /////
	ctxNext.clearRect(0, 0, canvasNext.width, canvasNext.height);
	ctxNext.fillStyle = gradient;
	ctxNext.roundRect(0, 0, canvasNext.width, canvasNext.height, 10);
	for (let i=0; i<3; i++) {
		let shape = next[i];
		for (let x=0; x<5; x++) {
			for (let y=0; y<5; y++) {
				if (shape.template[x][y] != 0) {
					ctxNext.fillStyle = shape.color;
					ctxNext.roundRect(x * msize + 2, i*5*msize + y * msize + 2, msize - 1, msize - 1, 5);
				}
			}
		}
	}

	///// Счёт //////
	ctxScore.clearRect(0, 0, canvasScore.width, canvasScore.height);
	ctxScore.fillStyle = gradient;
	ctxScore.roundRect(0, 0, canvasScore.width, canvasScore.height, 10);
	ctxScore.font = "bold 22px serif";
	ctxScore.fillStyle = "rgba(200,200,200,242)";
	ctxScore.fillText("score:", 18, 28);
	ctxScore.font = "bold 43px serif";
	ctxScore.fillStyle = "rgb(223,223,233)";
	ctxScore.fillText(score, 16, 66);
}

let buttonLeft = () => {
	createCopy();
	for (let i=0; i<5; i++) curr.a[i].x -= 1;
	curr.center.x -= 1;
	if (!check()) t = 0;
	draw();
}
let buttonRight = () => {
	createCopy();
	for (let i=0; i<5; i++) curr.a[i].x += 1;
	curr.center.x += 1;
	if (!check()) t = 0;
	draw();
}
let buttonDown = () => {
	createCopy();
	for (let i=0; i<5; i++) curr.a[i].y += 1;
	curr.center.y += 1;
	check();
	draw();
}
let buttonFlipLeft = () => {
	createCopy();
	for (let i=0; i<5; i++) {
		let x = curr.a[i].y - curr.center.y;
		let y = curr.a[i].x - curr.center.x;
		curr.a[i].x = curr.center.x + x;
		curr.a[i].y = curr.center.y - y;
	}
	if (!check()) t = 0;
	draw();
}
let buttonFlipRight = () => {
	createCopy();
	for (let i=0; i<5; i++) {
		let x = curr.a[i].y - curr.center.y;
		let y = curr.a[i].x - curr.center.x;
		curr.a[i].x = curr.center.x - x;
		curr.a[i].y = curr.center.y + y;
	}
	if (!check()) t = 0;
	draw();
}
let buttonSwap = () => {
	if (!swapped) {
		let s = curr.shape;
		if (swap != null) {
			curr = new Figure(swap);
		} else {
			curr = new Figure(next.shift());
			next.push(getRandomShape());
		}
		swap = s;
		swapped = true;
	}
}

onkeydown = (event) => {
	let key = event.key;

	if (key == "ArrowLeft" || key == "a") buttonLeft();
	else if (key == "ArrowRight" || key == "d") buttonRight();
	else if (key == "ArrowDown" || key == "s") buttonDown();
	else if (key == "ArrowUp" || key == "w") buttonFlipRight();
	else if (key == "Enter" || key == "f") buttonSwap();
}

createTetris();















function hsv(h, s, v) {
	let r, g, b, i, f, p, q, t;
	if (arguments.length === 1) s = h.s, v = h.v, h = h.h;
	i = Math.floor(h * 6);
	f = h * 6 - i;
	p = v * (1 - s);
	q = v * (1 - f * s);
	t = v * (1 - (1 - f) * s);
	switch (i % 6) {
			case 0: r = v, g = t, b = p; break;
			case 1: r = q, g = v, b = p; break;
			case 2: r = p, g = v, b = t; break;
			case 3: r = p, g = q, b = v; break;
			case 4: r = t, g = p, b = v; break;
			case 5: r = v, g = p, b = q; break;
	}
	return `rgb(${Math.round(r * 255)},${Math.round(g * 255)},${Math.round(b * 255)})`;
}