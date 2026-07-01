/////////   Ac     /////////


// A JS object is an entity having state and behavior(properties and method)
// JS object have a special property called prototype.(Ek object k andar ek aur by-default object is called prototype 
// which consist of properties and method.)
// array is an object. All the bydefault properties are stored in prototype object.

// const student = {
//     fullName : "Priyanka Jana",  //Object Properties
//     marks : 95.3,
//     printMarks : function(){          // object methods
//         console.log("Marks: ", this.marks);   // this.marks means student ka marks
//         console.log("Name: ", this.fullName);  // this.fullName means student.fullName
//     },  
// };

/*
//function definition
const employee = {
    calcTax1() {
            console.log("Tax rate is 10%");
    },          // or //
    calcTax2 : function() {
        console.log("Tax rate is 30%");
    }
};

const karanArjun = {
    salary : 50000,
}

// if we want to use methods or properties in another class then,
// we can set prototype using __proto__
// hence we don't have to create multiple functions, we can simply inherit them using __proto__ in another object

karanArjun.__proto__=employee;

// if object & prototype have same method, object's method will be used.
const karanArjun1 = {
    salary:60000,
    calcTax() {
        console.log("Tax rate is 20%");
    },
};
karanArjun1.__proto__=employee;
*/

/*
// Classes  
class Car {
    constructor(brand, mileage){
        console.log("I create objects.");
        this.brandName = brand;
        this.mileage = mileage;
    }
    // Methods
    start(){
        console.log("Start");
    }
    stop(){
        console.log("Stop");
    }
    // Instead of writing function we can add this in constructor only.
    // setBrand(brand){
    //     this.brandName = brand;
    // }
}

let ToyotaCar = new Car("Toyota", 12);   // Constructor
console.log(ToyotaCar)
// ToyotaCar.setBrand("ToyotaCar");

let fortuner = new Car("Fortuner", 13);     // Constructor
console.log(fortuner)
// fortuner.setBrand("Fortuner");

let lexus = new Car("Lexus", 14);       // Constructor
console.log(lexus);
// lexus.setBrand("Lexus")
*/

// Inheritance 

// class Parent{
//     hello(){
//         console.log("Hello! I am Priyanka.")
//     }
// }

// class Child extends Parent {}

// let obj = new Child();
// let obj2 = new Parent();

/*
class Person{
    constructor(){
        this.species = "Homo Sapiens";
    }
    eat(){
        console.log("Can eat");
    }
    sleep(){
        console.log("Can sleep");
    }
    work(){
        console.log("Do nothing.");
    }
}

class Engineer extends Person{
    constructor() {
        console.log("I am an Engineer.");
    }
    work(){
        console.log("Solves Problems, Builds Something");
    }
}

class Doctor extends Person{
    work(){
        console.log("I treat patients and give medicines.");
    }
}

let priyankaObj = new Engineer();
// let doctor = new Doctor();
// let e1 = new Engineer();
// console.log(e1);
*/



///// super keyword  (IMP)  //////
/*
class Person{
    constructor(){
        console.log("Enter Parent Constructor")
        this.species = "Homo Sapiens";
        console.log("Exit Parent Constructor")
    }
    eat(){
        console.log("Can eat");
    }
    sleep(){
        console.log("Can sleep");
    }
}

class Engineer extends Person{
    constructor(branch) {
        console.log("Enter Child Constructor")
        // super keyword
        super();    // to invoke parent class constructor(calling Person class constructor first)
        this.branch = branch;
        console.log("Exit Child Constructor")
    }
    work(){
        console.log("Solves Problems, Builds Something");
    }
}

let engObj = new Engineer("Chemical Engineer");
*/


/*
class Person{
    constructor(name){
        this.species = "Homo Sapiens";
        this.name = name;
    }
    eat(){
        console.log("Can eat");
    }
    sleep(){
        console.log("Can sleep");
    }
}

class Engineer extends Person{
    constructor(name) {
        // super keyword
        // super();       // to invoke parent class constructor(calling Person class constructor first)
        super(name);      // this passes on some imp properties or info to parent class.
    }
    work(){
        super.eat();   // also used to invoke some methods of parent class in child class. 
        console.log("Solves Problems, Builds Something");
    }
}

let engObj2 = new Engineer("Priyanka");
*/