class dustbin {
    constructor(x, y,width,height) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':10.0
      }
      this.body =Bodies.rectangle(x, y,width,height, options);
      this.width =width;
      this.height =height;
      
      this.image=loadImage("images/dustbingreen.png")

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      

      fill("white");
      rect(pos.x,pos.y,this.width,this.height);
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      pop();
    }
  };
  
