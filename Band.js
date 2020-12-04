class Band {
    constructor(body1,body2){
        var options={
            bodyA:body1,
            bodyB:body2,
            stiffness:0.04,
            length:10
        }
        this.band=Constraint.create(options);
        World.add(World,this.band);
        }
        display() {

            strokeWeight(3);
            line(this.band.bodyA.position.x,this.band.bodyA.position.y,this.band.bodyB.position.x,this.band.bodyB.position.y);
        }
}