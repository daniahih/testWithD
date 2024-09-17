// Without a loop (manual repetition)

console.log("Student 1: Present");
console.log("Student 2: Present");
console.log("Student 3: Present");
console.log("Student 4: Present");
console.log("Student 5: Present");

// With a loop (efficient repetition)
for (let i = 1; i <= 5; i++) {
  console.log(`Student ${i}: Present`);
}
while (true) {
  console.log("I will keep printing this message");
  break;
}
// Example 1: Basic for loop
// Question: What will be the output of this loop and why?
for (let i = 0; i < 5; i++) {
  console.log(i);
}
// Expected output: 0, 1, 2, 3, 4
// This loop runs as long as i < 5, incrementing i by 1 each time.

// Example 2: Using a for loop with an array
// Question: Can you explain why we use 'arr.length' in the loop condition?
const arr = ["apple", "banana", "cherry"];
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
// Output: apple, banana, cherry
// We use arr.length to dynamically handle the size of the array.

// Example 3: Reverse loop trick
// Question: How is this loop different from a standard loop and why is this useful?
const numArr = [1, 2, 3, 4, 5];
for (let i = numArr.length - 1; i >= 0; i--) {
  console.log(numArr[i]);
}
// Output: 5, 4, 3, 2, 1
// This is a reverse loop, iterating from the end of the array to the beginning.

// Example 4: For-of loop for arrays
// Question: How does the 'for-of' loop differ from a traditional 'for' loop?
const fruits = ["mango", "grape", "orange"];
for (const fruit of fruits) {
  console.log(fruit);
}
// Output: mango, grape, orange
// The 'for-of' loop simplifies array iteration by directly accessing elements.

// Example 5: While loop
// Question: When would it be better to use a while loop instead of a for loop?
let counter = 0;
while (counter < 3) {
  console.log(counter);
  counter++;
}
// Output: 0, 1, 2
// A 'while' loop is useful when the number of iterations isn't predetermined.

// Example 6: Do-while loop (runs at least once)
// Question: What’s the difference between a 'while' loop and a 'do-while' loop?
let x = 5;
do {
  console.log(x);
  x--;
} while (x > 3);
// Output: 5, 4
// The 'do-while' loop runs at least once, even if the condition is false initially.

// Example 7: Infinite loop (be careful!)
// Question: What would happen if you forget to increment the loop counter?
let y = 0;
while (y < 3) {
  console.log(y);
  // y++;  // Uncommenting this will prevent the infinite loop
}
// Output: The loop will run infinitely because y is never incremented.

// Example 8: Break in loops
// Question: What does the 'break' statement do in loops, and when might you use it?
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i);
}
// Output: 0, 1, 2, 3, 4
// The 'break' statement stops the loop when i equals 5.

// Example 9: Continue in loops
// Question: How does 'continue' differ from 'break' in loops?
for (let i = 0; i < 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
// Output: 0, 1, 2, 4
// The 'continue' statement skips the iteration when i equals 3, but the loop continues.

// Example 10: Nested loops
// Question: How can you optimize a nested loop, and when might this be problematic?
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 2; j++) {
    console.log(`i = ${i}, j = ${j}`);
  }
}
// Output:
// i = 0, j = 0
// i = 0, j = 1
// i = 1, j = 0
// i = 1, j = 1
// i = 2, j = 0
// i = 2, j = 1
// Nested loops can be inefficient for large datasets because the time complexity increases.

// Example 11: Using a loop with an object (for-in loop)
// Question: What’s the difference between 'for-in' and 'for-of' loops?
const person = { name: "Alice", age: 25, city: "Paris" };
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}
// Output:
// name: Alice
// age: 25
// city: Paris
// The 'for-in' loop iterates over object properties, while 'for-of' is used for iterable objects like arrays.

// Example 12: Loop over an array with map (functional programming)
// Question: How does the 'map' function improve code readability over a traditional loop?
const numbers = [1, 2, 3, 4];
const squared = numbers.map((num) => num * num);
console.log(squared);
// Output: [1, 4, 9, 16]
// 'map' creates a new array with transformed values, making the code more declarative and readable.
let number = 1;
while (number <= 100) {
  console.log(number);
  number++;
}
const age = 10;
while (age < 20) {
  console.log("you are too young");
}
for (let i = 0; i < 5; i++) {
  console.log(`hi ${i}`);
}
for (let x = 10; x > 5; x--) {
  console.log(`hi ${x}`);
}
for (let j = 11; j < 10; j += 2) {
  console.log(`hi ${j}`);
}
for (let a = 3; a < 15; k += 2) {
  console.log(`hi ${a}`);
}
for (let c = 0; c >= 0; c += 5) {
  console.log(`hi ${c}`);
}
