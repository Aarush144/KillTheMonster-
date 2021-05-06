class Box {
    constructor(x, y, width, height) {
      var options = {
        
          'restitution':0.8,
          'friction':1.0,
          'density':20,
      }
      // telling this body as rectangle 
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      
      // adding world to it 
      World.add(world, this.body);
    }


    // a function
    display(){
      // position
      var pos =this.body.position;
      // angle
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      strokeWeight(10);
      stroke("white");
      fill(27, 38, 49);
      rect(0, 0, this.width, this.height);
      pop();
    }
  }