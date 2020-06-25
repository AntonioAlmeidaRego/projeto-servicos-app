export default class Required {
    constructor(required) {
        this._required = required;
    }


    get required() {
        return this._required;
    }

    set required(value) {
        this._required = value;
    }
}
