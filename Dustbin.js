class Dustbin {
    constructor(world, y) {
        var options = {'isStatic': true};
        this.redb = Matter.Bodies.rectangle(width-250, y-15, 200, 20, options);
        this.redl = Matter.Bodies.rectangle(width-350, y-55, 20, 100, options);
        this.redr = Matter.Bodies.rectangle(width-150, y-55, 20, 100, options);
        Matter.World.add(world, this.redb);
        Matter.World.add(world, this.redl);
        Matter.World.add(world, this.redr);
    }

    display() {
        var red1 = createSprite(width-250, this.redb.position.y-15, 200, 20);
        var red2 = createSprite(width-350, this.redl.position.y-55, 20, 100);
        var red3 = createSprite(width-150, this.redr.position.y-55, 20, 100);
        red1.shapeColor = color(255, 0, 0);
        red2.shapeColor = color(255, 0, 0);
        red3.shapeColor = color(255, 0, 0);
    }
};