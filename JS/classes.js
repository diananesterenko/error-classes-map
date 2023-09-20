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
