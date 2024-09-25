function show(times) {
  if (times === 0) return;
  console.log("hi there");
  show(times - 1);
}

show(5);

function recursiveFunction(parameters) {
  if (baseCondition) {
    // Base case: Stops recursion
    return; // Return when base case is met
  } else {
    // Recursive case: Function calls itself with modified parameters
    recursiveFunction(modifiedParameters);
  }
}
function factorialIterate(n) {
  // Initialize a variable 'result' to 1, as we will multiply numbers in a loop.
  let result = 1;

  // Loop from 1 up to and including the value of 'n'.
  // We start the loop with i = 1 because the factorial of any number n is the
  // product of all positive integers from 1 to n.
  for (let i = 1; i <= n; i++) {
    // Multiply 'result' by the current value of 'i' at each step of the loop.
    // This accumulates the product of all integers from 1 to n.
    result *= i;
  }

  // Return the final result, which now contains the factorial of n.
  return result;
}

console.log(factorialIterate(5));

function factorial(n) {
  if (n <= 1) {
    // Base case
    return 1;
  }
  return n * factorial(n - 1);
  // Recursive case
}
console.log(factorial(5));

const arr = [1, 2, 3, 4, 5];
function printNumber(index, arr) {
  if (index >= arr.length) return;
  console.log(arr[index]);
  printNumber(index + 1, arr);
}
printNumber(0, [1, 2, 3, 4, 5]);

function power(number, exponent) {
  debugger;
  if (exponent == 1) return number;

  return number * power(number, exponent - 1);
}

console.log(power(2, 5));

function fibonacci(n) {
  // Base case: if 'n' is 0 or 1, return 'n' directly (because F(0) = 0 and F(1) = 1).
  if (n <= 1) {
    return n;
  }
  // Recursive case: return the sum of the two previous Fibonacci numbers.
  // This follows the formula: F(n) = F(n-1) + F(n-2)
  return fibonacci(n - 1) + fibonacci(n - 2);
}
console.log(fibonacci(40)); // This will log the 40th Fibonacci number using recursion.

function fibonacciIterative(n) {
  let a = 0,
    b = 1,
    temp;
  for (let i = 2; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}
console.log(fibonacciIterative(5));
