class Ball {
	constructor(walls) {
		this.largura = 20;
		this.walls = walls;
		this.fotons = [];
	}
	draw() {
		let walls = this.walls;
		ellipse(mouseX, mouseY, this.largura);
		for(let i = 0; i < 360; i+=350/500) {
			//this.fotons.push(new Foton(mouseX, mouseY, radians(i)));
			let end = p5.Vector.fromAngle(radians(i))
			push()
			translate(mouseX, mouseY);
			let colide = false
			let perto = null
			let r = 9999;
			walls.forEach((wall, j) => {
				let paredeBeginX = wall.begin.x - mouseX;
				let paredeBeginY = wall.begin.y - mouseY;
				let paredeEndX = wall.end.x - mouseX;
				let paredeEndY = wall.end.y - mouseY;
			//line(paredeBeginX, paredeBeginY, paredeEndX, paredeEndY);
				colide = collideLineLine(0, 0, end.x*1000, end.y*1000, paredeBeginX, paredeBeginY, paredeEndX, paredeEndY, true)
				if(colide.y) {
					if(p5.Vector.dist(createVector(colide.x, colide.y), createVector(0, 0)) < r) {
						r = p5.Vector.dist(createVector(colide.x, colide.y), createVector(0, 0));
						perto = createVector(colide.x, colide.y);
					}
				}		
			})
			if(perto) {
				stroke(255)
				line(0, 0, perto.x, perto.y)
			}
			pop()
		}
	}
}