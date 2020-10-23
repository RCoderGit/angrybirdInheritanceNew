class Bird extends BaseClass
{
    constructor(x,y)
    {
        super(x,y,50,50);
        this.image=loadImage("bird.png");
    }
    display()
    {
        this.box_object.position.x=mouseX;
        this.box_object.position.y=mouseY;
        super.display();
    }

}