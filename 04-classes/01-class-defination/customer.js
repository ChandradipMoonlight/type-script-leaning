var Customer = /** @class */ (function () {
    function Customer(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Customer;
}());
// lets create instance
var myCutomer = new Customer("Dipak", "Nilesh");
// myCutomer.firstName = "Moonlight";
// myCutomer.lastName = "Sunlight";
console.log(myCutomer.firstName);
console.log(myCutomer.lastName);
