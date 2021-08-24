class Customer {
  firstName: string;
  lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
}

// lets create instance
let myCutomer = new Customer("Dipak", "Nilesh");
// myCutomer.firstName = "Moonlight";
// myCutomer.lastName = "Sunlight";
console.log(myCutomer.firstName);
console.log(myCutomer.lastName);