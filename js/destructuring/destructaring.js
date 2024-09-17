const person = {
  name: "Alice",
  age: 25,
  job: "Engineer",
};

// Without destructuring:
const name = person.name;
const age = person.age;

// With destructuring:
const { name, age } = person;

console.log(name); // 'Alice'
console.log(age); // 25
