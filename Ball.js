class Ball {
    constructor(x, y, radius) {
        var options = {
        'isStatic': false,
        'restitution': 0.3,
        'friction': 0.5,
        'density': 1.2
        };
        this.body = Matter.Bodies.circle(x, y, radius*2, options);
        this.radius = radius;
        Matter.World.add(world, this.body);
    }

    display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        ellipseMode(CENTER);
        strokeWeight(4);
        stroke("green");
        fill(255);
        ellipse(0, 0, this.radius, this.radius);
        pop();
    }
};