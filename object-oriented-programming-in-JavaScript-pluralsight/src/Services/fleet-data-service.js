import {Car} from "../Classes/Car.js";
import {Drone} from "../Classes/Drone.js";
import {DataError} from "./data-error.js";

export class FleetDataService {
    constructor() {
        this._cars = [];
        this._drones = [];
        this._errors = [];
    }

    get Cars() {
        return this._cars;
    }

    set Cars(cars) {
        this._cars = cars;
    }

    get Drones() {
        return this._drones;
    }

    set Drones(drones) {
        this._drones = drones;
    }

    get Errors() {
        return this._errors;
    }

    loadData(fleet) {
        for (let data of fleet) {
            switch (data.type) {
                case 'car':
                    let car = this.readCarData(data);
                    this._cars.push(car);
                    break;
                case 'drone':
                    let drone = this.readDroneData(data);
                    this._drones.push(drone);
                    break;
                default:
                    let error = new DataError("Invalid Vehicle Type", data);
                    this._errors.push(error);
                    break;
            }
        }
    }

    readCarData(car) {
        try {
            let c = new Car(car.license, car.model, car.latLong);
            c.Make = car.make;
            c.Miles = car.miles;
        }
        catch (error) {
            let e = new DataError("Error Loading Car: ", car);
            this._errors.push(e);
        }

        return null;
    }

    readDroneData(drone) {
        let d = new Drone(drone.license, drone.model, drone.latLong);
        d.AirTimeHours = drone.airTimeHours;
        d.Base = drone.base;
        return d;
    }
}