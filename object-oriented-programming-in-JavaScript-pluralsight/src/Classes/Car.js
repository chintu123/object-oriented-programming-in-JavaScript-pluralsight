import {Vehicle} from "./Vehicle.js";

export class Car extends Vehicle {

    /* Module 3 : Start */

    // constructor() { // Sample constructor inheritance
    //     super(); // Note: this is mandatory for child class, we can use this super() to pass value to base constructor. Super should be called first in constructor inheritance
    //     console.log("childclass car contructor");
    // }

    // start() {
    //     console.log("starting car");
    //     super.start();
    // }

    // static staticMethod() {
    //     // super() method does not working static method
    //     console.log("static method in childclass car");
    // }

    /* Module 3 : End */

    constructor(license, model, latlong) {
        super(license, model, latlong);
    }

    constructor(license, model, latlong, miles, make) {
        super(license, model, latlong);
        this._miles = miles;
        this._make = make;
    }

    get Miles()
    {
        return this._miles;
    }

    set Miles(value)
    {
        this._miles = value;
    }

    get Make()
    {
        return this._make;   
    }

    set Make(value)
    {
        this._make = value;
    }
}