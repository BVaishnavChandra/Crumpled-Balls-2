class Paper
{
    constructor(x,y,r)
    {
        var options=
        {
            'isStatic':false,
            'restitution':0.3,
            'friction':0.5,
            'density':1.2,
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Bodies.circle(x,y,this.r,options);

        this.image = loadImage("crumpled ball.png");

        World.add(world,this.body);
        
     
        
    }

    display()
    {
        var paperpos=this.body.position;
        push();
        fill("black");
        translate(paperpos.x,paperpos.y);
        
        imageMode(RADIUS);
        image(this.image ,0,0,50,50);

        //ellipseMode(RADIUS);
        //ellipse(0,0,this.r,this.r);
        pop();
    }
}