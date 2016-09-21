import {Vehicle} from "./Vehicle.js";

export class Drone extends Vehicle {

    /* Module 3 : Start */

    // constructor() {
    //     super(); // In method inheritance super can be called anytime
    //     console.log("childclass drone contructor");
    // }

    // start() {
    //     console.log("starting drone");
    // }

    // static staticMethod() {
    //     console.log("static method in childclass drone");
    // }

    /* Module 3 : End */

    constructor(license, model, latlong) {
        super(license, model, latlong);
    }

    constructor(license, model, latlong, base, airtimehours) {
        super(license, model, latlong);
        this._base = base;
        this._airtimehours = airtimehours;
    }

    get Base() {
        return this._base;
    }

    set Base(value) {
        this._base = value;
    }

    get AirTimeHours() {
        return this._airtimehours;
    }

    set AirTimeHours(value) {
        this._airtimehours = value;
    }
}