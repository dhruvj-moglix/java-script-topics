class employee{
    constructor(x,y,z){
        this.name=x;
        this.post=y;
        this.yrs=z;
    }
};

// a = new student("dhruv",7,99);
// console.log(a);

// b = new student(77,"lokesh",99);
// console.log(b);

class programmer extends employee{
    constructor(x,y,z,w){
        super(x,y,z); //this means to call the cosntructor of the parent class
        this.w=7;
    }
    
    static multiply(a,b) { return a*b }
}

//to call static function we need to write syntax like
let c =programmer.multiply(2,3);
console.log(c);

