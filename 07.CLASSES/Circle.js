class Circle{
    constructor(r){
        this.r = r;
        this.d = r *2;
    }

    get radius(){
        return this.r;
    }

    get diameter(){
        return this.d;
    }

    set diameter(value){
        this.r = value /2;
        this.d = value;
    }

    get area(){
        return Math.PI * (this.r**2);
    }
}

let c = new Circle(2);
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
c.diameter = 1.6;
console.log(`Radius: ${c.radius}`);
console.log(`Diameter: ${c.diameter}`);
console.log(`Area: ${c.area}`);
