class Rope {
    constructor(bodyA, pointB) {
      var options = {
        bodyA: bodyA,
        pointB: pointB,
        stiffness: 1.2,
        length: 450,
      };
  
      this.pointB = pointB;

      // declaring this rope as constraint 
      this.rope = Constraint.create(options);
      // adding to world 
      World.add(world, this.rope);

    }
    
  // function
    display() {

      if (this.rope.bodyA) {
        var pointA = this.rope.bodyA.position;
        var pointB = this.pointB;
        push();
       // invisible rope         
        stroke(0);
        strokeWeight(0);
        // giving values to line
        line(pointB.x, pointB.y, pointA.x, pointA.y);
        pop();
      }
    }
  }