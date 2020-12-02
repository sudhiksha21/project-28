class Stone {
    constructor(x,y){
        var opt = { 
            isStatic : false,
            restitution : 0,
            friction : 1,
            density : 0.4,
            stiffness: 0.004
        }
        this.body = Bodies.circle(x,y,40,opt);
        World.add(world,this.body)
        this.image = loadImage("stone.png");
    }
    display(){
        
        imageMode(CENTER);
        image(this.image,this.body.position.x,this.body.position.y,40,40);
        
    }
}