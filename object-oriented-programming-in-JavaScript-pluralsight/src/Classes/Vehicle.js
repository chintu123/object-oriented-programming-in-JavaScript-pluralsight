export class Vehicle {
    
    /* Module 3 : Start */
    // constructor() {
    //     this.isGPSEnabled = false; // Property inheritance. Child class can override base class property values;
    //     console.log("baseclass vehicle contructor");
    // }

    // start() { // Method inheritance
    //     console.log("starting vehicle");
    // }

    // static staticMethod() {
    //     // This method is also inherited and works in same manner as instance methods
    //     console.log("static method in baseclass vehicle");
    // }
    /* Module 3 : End */

    constructor(license, model, latlong)
    {
        this._license = license;
        this._model = model;
        this._latlong = latlong;
    }

    get License()
    {
        return this._license;
    }

    set License(value)
    {
        this._license = value;
    }

    get Model()
    {
        return this._model;
    }

    set Model(value)
    {
        this._model = value;
    }

    get LatLong()
    {
        return this._latlong;
    }

    set LatLong(value)
    {
        this._latlong = value;
    }
}