class Pig extends BaseClass {
  constructor(_x, _y,_image){
    super(_x,_y,50,50);
    this.image = loadImage(_image);
  //  this.image = loadImage("sprites/x.png");
    this.Visiblity = 255;
    this.x=_x;
    this.y=_y;
  }

 display(){
   //console.log(this.body.speed);
   if(this.body.speed < 5){
    super.display();
   }
   else{
     World.remove(world, this.body);
     push();
     this.Visiblity = this.Visiblity - 5;
     tint(255,this.Visiblity);
     image(this.image, this.body.position.x, this.body.position.y, 50, 50);
     pop();
   }
  }

  score(){
    if (this.Visiblity < 0 && this.Visiblity > -1005){
      score++;
    }
  }



};