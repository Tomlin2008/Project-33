class Snow {
    constructor(x, y, width, height) {
        
        //Physical properties of snow
        var options={
            'friction':2,
            'restitution':0.5,
            'density':1
        }

        //Creating snow body and loading image
        this.body=Bodies.rectangle(x, y, width, height, options);
        this.image= loadImage("images/crystal.webp");
        this.width= width;
        this.height= height;

        //Adding snow body to the world
        World.add(world, this.body);

    }

    display() {

        //Creating variable to store the position of snow
        var pos=this.body.position;
        
        //Adding image
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);

    }
}