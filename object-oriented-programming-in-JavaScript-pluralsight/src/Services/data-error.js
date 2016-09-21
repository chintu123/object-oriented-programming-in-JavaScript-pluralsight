export class DataError {
    constructor(message, data) {
        this._message = message;
        this._data = data;
    }

    get Message() {
        return this._message;
    }

    set Message(value) {
        this._message = value;
    }

    get Data() {
        return this._data;
    }

    set Data(value) {
        this._data = value;
    }
}