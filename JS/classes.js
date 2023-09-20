///1------------------------------------
class Phone {
  constructor(brand, color, year, price) {
    this._brand = brand;
    this._color = color;
    this.year = year;
    this._price = price;
  }
  getAgeOfPhone() {
    return new Date().getFullYear() - this._year;
  }
  set year(value) {
    console.log("setter");
    if (!Number.isInteger(value)) {
      throw new TypeError("Year must be a number");
    }

    if (value < 1999 || value > new Date().getFullYear()) {
      console.log("errrrr");
      throw new RangeError("Year must be >2000 and <2023");
    }
    this._year = value;
  }
  get year() {
    return this._year;
  }
}
try {
  const phone1 = new Phone("iphone", "black", 2019, 20000);
  console.log(phone1.getAgeOfPhone());
  // console.log(phone1);
  phone1.year = 2018;
  //phone1.year = "2000"; //err
  console.log(phone1.year);
} catch (err) {
  console.log(err);
}
//2--------------------------
console.log("-----------------2--------------------------------------");
class RangeValidator {
  constructor(from, to) {
    this.from = from;
    this.to = to;
  }
  set from(value) {
    if (typeof value !== "number") {
      throw new TypeError("From must be a number");
    }
    if (value > this.to) {
      throw new RangeError("from must be <= to");
    }
    return (this._from = value);
  }
  get from() {
    console.log("getter");
    return this._from;
  }
  set to(value) {
    if (typeof value !== "number") {
      throw new TypeError("To must be a number");
    }
    if (value < this.from) {
      throw new RangeError("from must be <= to");
    }
    return (this._to = value);
  }
  get to() {
    return this._to;
  }
  get range() {
    return [this._from, this._to];
  }
  isValid(value) {
    return value > this.range[0] && value < this.range[1];
  }
}
const range1 = new RangeValidator(1, 5.5); // Відпрацьовує
//const range1 = new RangeValidator(10, 5.5) // ПОМИЛКА! (оскільки має бути from <= to)
console.log(range1);
range1.from = 5; // Відпрацьовує
//range1.from = 200; // ПОМИЛКА! (оскільки не має бути більше заданого вище в конструкторі to: 5.5)
console.log(range1.from);
range1.to = 80; // Відпрацьовує
//range1.to = -55; // ПОМИЛКА! (оскільки не має бути менше заданого вище from
console.log(range1.to);
console.log(range1.range); // => [5, 80]
// Робота validate
console.log(range1.isValid(10)); // => true (оскільки належить діапазону [5, 80])
console.log(range1.isValid(100)); // => false (оскільки не належить діапазону [5, 80])
