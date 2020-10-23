class BaseClass{

    constructor(x,y,width,height,angle)
    {
        var options={
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.box_object=Bodies.rectangle(x,y,width,height,options);
        this.width=width;
        this.height=height;
        this.image = loadImage("ground.png");
        World.add(world,this.box_object);
    
    }
    display()
    {
        push();
        translate(this.box_object.position.x,this.box_object.position.y)
        rotate(this.box_object.angle);
        //rectMode(CENTER);
       // rect(this.box_object.position.x,this.box_object.position.y,this.width,this.height);
       imageMode(CENTER);
       image(this.image, 0, 0, this.width, this.height);
      
       pop();
    }
    
    }