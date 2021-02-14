class Dustbin{
  
   constructor(x,y,width,height){
    
       var options=
        
    {
      isStatic:true
    }  

      this.planko = Bodies.rectangle(x,y,width,height,options);
      this.x = x;
      this.y = y ;
      this.width = width ;
      this.height = height ;
     
      this.image = loadImage("dustbin.png");

      World.add(world,this.planko)

   }

display(){
      rectMode(CENTER)

      noStroke();
      fill("green");

      rect(this.planko.position.x , this.planko.position.y ,this.width, this.height);

   }
}