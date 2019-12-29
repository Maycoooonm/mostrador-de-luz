let walls = [];
let ball;
function setup() {
	createCanvas(500, 500);
	background(100);
	for(let i = 0; i < 4; i++) { 
		walls[i] = new Wall(random(500), random(500), random(500), random(500));
	}
	walls.push(new Wall(0, 0, 0, 500));
	walls.push(new Wall(0, 500, 500, 500));
	walls.push(new Wall(500, 500, 500, 0));
	walls.push(new Wall(0, 0, 500, 0));
	
	ball = new Ball(walls);
}
function draw() {
	background(100)
	ball.draw();
	for(let wall of walls) {
		wall.draw();	
	}
}