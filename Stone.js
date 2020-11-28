class Stone{
    constructor(x, y, r, angle){
        var options = {
            isStatic: false,
            restitution: 0,
            friction: 1,
            density: 1.2
        }

        this.x = x;
        this.y = y;
        this.r = r;

        this.body = Bodies.circle(this.x, this.y, this.r/2, options);
        this.image = loadImage("stone.png");
        World.add(world, this.body);
    }

    display(){
        var stonePos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(stonePos.x, stonePos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.r, this.r);
        pop();
    }
}