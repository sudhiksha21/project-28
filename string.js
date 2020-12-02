class String{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.002,
            length: 10
        }
        this.string = Constraint.create(options);
        World.add(world, this.string);
    }
    fly(){
        this.string.bodyA = null;
    }
    attach(){
        this.string.bodyA = stone.body;   
    }
    display(){
        if(this.string.bodyA != null){
        var pointA = this.string.bodyA.position;
        var pointB = this.string.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}