class Astronaut{
	constructor(x,y,r){
		var options={
			restitution:0.3,
			friction:1,
			density:1.2
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		this.image = loadImage("Images/a.png");
		World.add(world, this.body);
	}
	display(){
			this.body.position.y = mouseY;
			var paperpos=this.body.position;		
			push()
			translate(paperpos.x, paperpos.y);
			strokeWeight(3);
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image,0,0,this.width,this.height);
			pop();
	}
}