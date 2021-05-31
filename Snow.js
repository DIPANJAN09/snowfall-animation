class Snow{
    constructor(x,y){
        var options={
            friction:0,
            //density:0.005
        }
        this.body = Bodies.rectangle(x,y,20,20,options);
        World.add(world,this.body);

    }
    display(){
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,20,20);

    }
}