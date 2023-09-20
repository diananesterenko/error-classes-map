const arr = [
  [1, "first"],
  [3, "third"],
];
const map1 = new Map(arr);
console.log(map1);
console.log("Mapsize: " + map1.size);
console.log("-------------------");
map1.set(2, "second");
console.log('Added element: " ');
console.log(map1);
console.log("-------------------");

map1.delete(2, "second");
console.log('Deleted element: " ');
console.log(map1);
console.log("---------пошук за ключом.----------");
console.log(map1.get(1));
console.log(
  "---------Перевірити, чи є в мапі числівник для числа 2.----------"
);
console.log(map1.has(2));
console.log("--------список ключів та значень окремо.-----------");
console.log([...map1.keys()]);
console.log([...map1.values()]);
console.log("--------функцію, яка перероблятиме текст з числами-----------");
function translate(phrase) {
  return phrase
    .split(" ")
    .map((word) => (map1.has(Number(word)) ? map1.get(Number(word)) : word))
    .join(" ");
}
const phrase =
  "This year I will enter the 1 grade. I have two brothers. I am the 3 child of my parents.";
console.log(phrase);
console.log("=====>");
const translated = translate(phrase);
console.log(translated);
