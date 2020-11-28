class Tree{
    constructor(x, y){

        this.x = x;
        this.y = y;
        this.trunkWidth = 450;
        this.trunkHeight = 600;
        this.trunkThickness = 10;

        this.image = loadImage("tree.png");
        this.bottomTrunkBody = Bodies.rectangle(this.x, this.y, this.trunkWidth, this.trunkThickness, {isStatic: true});
        this.leftTrunkBody = Bodies.rectangle(0, this.y - this.trunkHeight/2, this.trunkThickness, this.trunkHeight, {isStatic: false});
        this.rightTrunkBody = Bodies.rectangle(this.x + this.trunkWidth/2, this.y = this.trunkHeight/2, this.trunkThickness, this.trunkHeight, {isStatic: false});

        World.add(world, this.bottomTrunkBody);
        World.add(world, this.leftTrunkBody);
        World.add(world, this.rightTrunkBody);
    }

    display(){
        var bottomTrunkPos = this.bottomTrunkBody.position;

        push();
        translate(bottomTrunkPos.x, bottomTrunkPos.y + 10);
        fill(255);
        imageMode(CENTER);
        image(this.image, 0, -this.trunkHeight/2, this.trunkWidth, this.trunkHeight);
        pop();
    }
}