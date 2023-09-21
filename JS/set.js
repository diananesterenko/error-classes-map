const s1 = new Set([1, 2, 3]);
console.log(s1);
console.log("--------Has 3?-----------");

console.log(s1.has(3)); //true
console.log("--------Has 4?-----------");

console.log(s1.has(4)); ///false
s1.add(5);
s1.add(6);
console.log("--------for of-----------");
for (const item of s1) {
  console.log(item);
}
console.log("--------- sum----------");
let sum = 0;
for (const item of s1) {
  sum += item;
}
console.log(`sum: ${sum}`);
console.log("--------- delete 2----------");
s1.delete(2);
console.log(s1);
console.log("--------- clear s1----------");
s1.clear();
console.log(s1);
console.log(
  "--------- З масиву [1,6,9,4,9,1,5,6] отримати масив унікальних значень.----------"
);
const arr1 = [1, 6, 9, 4, 9, 1, 5, 6];
const arr2 = [...new Set(arr1)];
console.log(arr2);
console.log(
  "--------- З масивів [1,6,9,4,9,1,5,6] та [5, 10, 11] отримати один масив унікальних значень.----------"
);
const arr3 = [5, 10, 11];
const arr4 = [...new Set([...arr1, ...arr3])];
console.log(arr4);
console.log(
  "--------- створити: 1) масив імен користувачів (унікальних)----------"
);
const messages = [
  { id: 1, name: "Ivo", message: "hello", date: new Date() },
  { id: 2, name: "Ivo", message: "how are you", date: new Date() },
  { id: 3, name: "Wally", message: "hi)", date: new Date() },
  { id: 4, name: "Wally", message: "fine)", date: new Date() },
];
const names = [...new Set(messages.map((mes) => mes.name))];
console.log(names);
console.log(
  "--------- створити: 2) мапу вигляду{Ivo => [{message, date}, {message, date}],----------"
);
const namesWithMess = new Map();
names.forEach((n) =>
  namesWithMess.set(
    n,
    messages
      .filter((m) => m.name === n)
      .map((m) => ({
        message: m.message,
        date: m.date,
      }))
  )
);
console.log(namesWithMess);
