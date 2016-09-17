/* Module 1 - Start */
// class Drone {
//     constructor(id, name){
//         this._id = id;
//         this._name = name;
//     }

//     fly()
//     {
//        console.log("Drone " + this.id +  " is flying.");
//     }

//     static staticfunction()
//     {
//         console.log("Drone is flying from static function.");

//     }

//     get Id(){
//         return this._id;
//     }

//     set Id(id){
//          this._id = id;
//     }

//     get Name(){
//         return this._name;
//     }

//     set Name(name){
//         this._name = name;
//     }
// }

// Drone.fly = "yes";

// let drone1 = new Drone("1", "abc");
// let drone2 = new Drone("2", "pqr");


// console.log("Fields: " + drone1.id + "....." + drone2.id);
// console.log("Methods: " + drone1.fly() + "....." + drone2.fly());

// console.log("Static Property: " + Drone.fly);

// Drone.staticfunction();


// console.log("Get Property: " + drone1.Id + "...." + drone1.Name);

// drone2.Id = "Set1";
// drone2.Name = "abcde";
// console.log("Get Property: " + drone1.Id + "...." + drone1.Name);
/* Module 2 - Start */


/* Module 3 - Start */
// class Vehicle {
//     constructor() {
//         this.isGPSEnabled = false; // Property inheritance. Child class can override base class property values;
//         console.log("baseclass vehicle contructor");
//     }

//     start() { // Method inheritance
//         console.log("starting vehicle");
//     }

//     static staticMethod() {
//         // This method is also inherited and works in same manner as instance methods
//         console.log("static method in baseclass vehicle");
//     }
// }

// class Drone extends Vehicle {
//     constructor() {
//         super(); // In method inheritance super can be called anytime
//         console.log("childclass drone contructor");
//     }

//     start() {
//         console.log("starting drone");
//     }

//     static staticMethod() {
//         console.log("static method in childclass drone");
//     }
// }

// class Car extends Vehicle {
//     constructor() { // Sample constructor inheritance
//         super(); // Note: this is mandatory for child class, we can use this super() to pass value to base constructor. Super should be called first in constructor inheritance
//         console.log("childclass car contructor");
//     }

//     start() {
//         console.log("starting car");
//         super.start();
//     }

//     static staticMethod() {
//         // super() method does not working static method
//         console.log("static method in childclass car");
//     }
// }

// let drone1 = new Drone();
// console.log(drone1);
// console.log(drone1.start());
/* Module 3 - End */