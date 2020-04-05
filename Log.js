class Log extends BaseClass{
  constructor(_x,_y,_height,_angle){
    super(_x,_y,20,_height,_angle);
    this.image = loadImage("sprites/wood2.png");
    this.angle=_angle;
    Matter.Body.setAngle(this.body, this.angle);
  }
}