class Hero {
    constructor(x,y,r) {
      var options = {
          restitution: 0.4,
          friction: 0.7,
          density: 4
      }
      this.r = r;
      
      this.body = Bodies.circle(x,y,this.r,options);
      
      World.add(world, this.body);
    
    }    
    display() {
     
        var pos = this.body.position;
        
        push();
        translate(pos.x, pos.y);
        //rotate(angle);
        //imageMode(CENTER);
        noStroke();
        fill("brown")
        ellipseMode(RADIUS);
        ellipse(0, 0, this.r,this.r);
        pop();

    } 
    
};