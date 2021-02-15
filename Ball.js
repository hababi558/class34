class Ball {
    constructor(x, y,width,height) {
      var options = {
        'density':1.0,
        'frictionAir': 0.005,
        'restitution':0.01
      };
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('blue')
      fill('darkGray')
      ellipse(0, 0, this.width, this.height);
      pop();
    };
  };
  