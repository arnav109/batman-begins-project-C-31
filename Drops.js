class createDrops{
    constructor(x,y){
        var options={
            'restitution':0.1,
            'friction':0.01
        }
        this.body=Bodies.circle(x,y,5,options);
        this.radius=5;
        World.add(world,this.body);
    }
    update(){
        if(this.body.position.y>height){
            Matter.body.setPosition(this.body,{x:random(0,500) , y:random(o,650)});
        }
    }

    display(){
        noStroke();
        fill(0,0,255);
        elipseMode(RADIUS);
        elipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
    }
}