class Wall {
	constructor(x, y, x2, y2) {
		this.begin = createVector(x, y);
		this.end = createVector(x2, y2);
	}
	draw() {
		line(this.begin.x, this.begin.y, this.end.x, this.end.y);
	}
}