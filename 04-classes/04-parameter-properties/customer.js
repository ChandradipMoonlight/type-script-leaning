"use strict";
var Customer = /** @class */ (function () {
    function Customer(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }
    Object.defineProperty(Customer.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (name) {
            this._firstName = name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Customer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (name) {
            this._lastName = name;
        },
        enumerable: false,
        configurable: true
    });
    return Customer;
}());
var myCustomer = new Customer("Hari", "Bol");
console.log(myCustomer.firstName);
console.log(myCustomer.lastName);
