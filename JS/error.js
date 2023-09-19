function toPow(base, exponent) {
  if (exponent < 0) {
    throw new RangeError("exponent must be > 0 ");
  }
  if (!Number.isInteger(base) || !Number.isInteger(exponent)) {
    throw new RangeError("base  and exponent must be integer");
  }
  if (base !== "number" || exponent !== "number") {
    throw new TypeError("base  and exponent must be a number");
  }
  if (exponent === 0) {
    return 1;
  }
  return base * toPow(base, exponent - 1);
}
try {
  //console.log(toPow(4, 3)); //64
  console.log(toPow(4, 0)); //1
  //console.log(toPow(4, -2)); //"exponent must be > 0 ");
  //console.log(toPow(4.2, 0)); //"base  and exponent must be integer"
  //console.log(toPow("string", 0)); //base  and exponent must be a number
} catch (err) {
  if (err instanceof TypeError) {
    console.log("Type error: " + err.message);
  } else if (err instanceof RangeError) {
    console.log("Range error: " + err.message);
  } else {
    console.log("Error: " + err.message);
  }
}
