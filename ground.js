class ground{

    constructor(x,y,width,height)
    {
  var options={
    isStatic:true,
    /*/restitution:0.3,
    friction:0.5,
    density:1.2/*/
    }
    this.x=x;
    this.y=y;
    this.width=width;
    this.height=height;
    this.body=Bodies.rectangle(this.x,this.y,this.width,this.height,options)
    World.add(world,this.body);
    }
      
    display()
    {
        rectMode(CENTER)
        strokeWeight(3);
        fill("brown");
        rect(this.x,this.y,this.width,this.height);
    }
      }