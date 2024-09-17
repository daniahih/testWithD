// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let newArr = [];
// numbers.forEach((number) => {
//   newArr.push(number * 2);
// });
// console.log(newArr);
// const numbers = [1, 2, 3, 4];

// // Using map to automatically create a new array with doubled numbers
// const doubledNumbers = numbers.map((number) => {
//   return number * 2; // Each result is automatically added to the new array
// });
// console.log(doubledNumbers);
// console.log(numbers);

// const people = [
//   { name: "John", age: 30 },
//   { name: "Sarah", age: 25 },
//   { name: "Mike", age: 35 },
// ];
// const nameInCapitalLetters = people.map((person) => {
//   return { name: person.name.toUpperCase(), age: person.age };
// });
// console.log(nameInCapitalLetters);

// const peopleAbove26 = people.filter((person) => {
//   return person.age > 25;
// });
// console.log(peopleAbove26);

const person = { name: "Alice", age: 25 };
const { name, age } = person;
console.log(name);
