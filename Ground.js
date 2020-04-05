class Ground {
    constructor(_x,_y,_width,_height) {
      var options = {
          isStatic: true
      }
      this.x=_x; this.y=_y;
      this.width = _width;  this.height = _height;
      this.body = Bodies.rectangle(this.x,this.y,this.width,this.height,options);
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("brown");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };
