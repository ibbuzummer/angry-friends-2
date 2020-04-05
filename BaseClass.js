class BaseClass{
    constructor(_x, _y, _width, _height,_angle) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.x=_x; this.y=_y;
        this.width = _width;  this.height = _height;
        this.body = Bodies.rectangle(this.x, this.y, this.width, this.height, options);
        this.angle=_angle;
        this.image = loadImage("./sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        var angle = this.angle;
        this.pos=this.body.position;
        push();
        translate(this.pos.x, this.pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
      }
}