class Hero {
constructor(x,y,r)
{
    var options = { 
        density: 1, 
        frictionAir: 1
    };

    this.x=x;
    this.y=y;
    this.r=r;
    // image 
    this.image=loadImage("superhero1.png");
    // tellong this body as a circle 
    this.body=Bodies.circle(this.x, this.y, (this.r)/2, options);

    // adding this body to world 
    World.add(world, this.body);

}

// function 
display()
{  
        var heroPos=this.body.position;	
        	
        push()
        translate(heroPos.x, heroPos.y-100);
        rectMode(CENTER)
        fill(255,0,255)
        imageMode(CENTER);
        image(this.image, 0,0,this.r+150, this.r)
        pop()
        
}
}