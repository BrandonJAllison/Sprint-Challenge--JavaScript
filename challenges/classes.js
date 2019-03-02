// 1. Copy and paste your prototype in here and refactor into class syntax.

class CuboidMaker {
    constructor(attrs){
    this.length = attrs.length;
    this.width = attrs.width;
    this.height = attrs.height;
    };
    volume () {
        return (this.length * this.width * this.height);
    };

    surfaceArea () {
        return ( 2 * ((this.length * this.width) + (this.length * this.height) + (this.width * this.height)));
    };

};

class CubeMaker extends CuboidMaker{
    constructor(cubeAttrs){
        super(cubeAttrs);
    }
    //A cubes volume can be measured using the formula a*a*a as all sides are equal
    cubeVolume(){

        return (this.length * this.width * this.height);
    };

    //6a^2 is the formula for a cubes surgace
    cubeSurface(){
     return (6 * (this.width*this.width));   
    }
};


const cuboid =  new CuboidMaker  ({
    length:4,
    width:5,
    height:5 
});

const cube = new CubeMaker ({
    length:5,
    width:5,
    height:5 
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
 console.log(cuboid.volume()); // 100
 console.log(cuboid.surfaceArea()); // 130
 console.log(cube.cubeVolume()); // 125
 console.log(cube.cubeSurface()); // 150

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.