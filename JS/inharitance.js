class Vehicle {
  constructor(lenght, width, height, brand, model, manufactureDate) {
    (this._dimensions = { lenght, width, height }),
      (this._brand = brand),
      (this._model = model);
    this._manufactureDate = manufactureDate;
  }
  getFullInfo() {
    return `бренд: ${this._brand}, модель: ${this._model}, вік: ${this.age}`;
  }
  get age() {
    return new Date().getFullYear() - this._manufactureDate.getFullYear();
  }
}
const vehicle = new Vehicle(3, 1.5, 1.2, "audi", "a6", new Date(2018, 10, 3));
console.log(vehicle);
console.log(vehicle.getFullInfo());
console.log(vehicle.age);

class PassengerTransport extends Vehicle {
  constructor(
    lenght,
    width,
    height,
    brand,
    model,
    manufactureDate,
    passengerLimit,
    passengerCount
  ) {
    super(lenght, width, height, brand, model, manufactureDate);
    this._passengerLimit = passengerLimit;
    this._passengerCount = passengerCount;
  }

  addPassenger() {
    if (this._passengerLimit > this._passengerCount) {
      this._passengerCount++;
      return true;
    } else {
      return false;
    }
  }
  getFullInfo() {
    return `бренд: ${this._brand}, модель: ${this._model}, вік: ${this.age}, максимальна кількість місць: ${this._passengerLimit}`;
  }
}
const vehicle2 = new PassengerTransport(
  3,
  1.5,
  1.2,
  "audi",
  "a6",
  new Date(2018, 10, 3),
  5,
  4
);

console.log(vehicle2.addPassenger()); //4+1 true
console.log(vehicle2.addPassenger()); //5max false
console.log(vehicle2.getFullInfo());

class FreightTransport extends PassengerTransport {
  constructor(
    lenght,
    width,
    height,
    brand,
    model,
    manufactureDate,
    passengerLimit,
    passengerCount,
    capacity
  ) {
    super(
      lenght,
      width,
      height,
      brand,
      model,
      manufactureDate,
      passengerLimit,
      passengerCount
    );
    this._capacity = capacity;
  }
  checkLoadingPossibility(weight) {
    return this._capacity >= weight;
  }
  getFullInfo() {
    return `бренд: ${this._brand}, модель: ${this._model}, вік: ${this.age}, вантажопідйомність: ${this._capacity}`;
  }
}
const vehicle3 = new FreightTransport(
  3,
  1.5,
  1.2,
  "audi",
  "a6",
  new Date(2018, 10, 3),
  5,
  4,
  3000
);

console.log(vehicle3.getFullInfo());
console.log(vehicle3.checkLoadingPossibility(2900)); //true
console.log(vehicle3.checkLoadingPossibility(3900)); //false
