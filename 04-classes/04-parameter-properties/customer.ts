class Customer {

  constructor(private _firstName: string, private _lastName: string){}

  public get firstName(): string {
    return this._firstName;
  }

  public set firstName(name: string) {
    this._firstName = name;
  }

  public get lastName(): string {
    return this._lastName;
  }

  public set lastName(name: string) {
    this._lastName = name;
  }
}

let myCustomer = new Customer("Hari", "Bol");

console.log(myCustomer.firstName);
console.log(myCustomer.lastName);