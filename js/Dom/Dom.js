// get element by id
// / const title = document.getElementsByClassName("title");
// console.log(title);

// title[0].textContent = "Updated Title";

// Change the title text
// const title = document.getElementsByTagName("h1");
// title[0].textContent = "Updated Title";

const title = document.querySelector(".title");
title.innerHTML = "Welcome to DOM Manipulation!";

// ----------------------------------------------------------------
// Example with innerHTML
const innerHtmlDiv = document.getElementById("inner-html-example");
innerHtmlDiv.innerHTML = "<strong>This text is bold using innerHTML!</strong>";
// The HTML tag <strong> will be parsed, making the text bold.

// Example with textContent
const textContentDiv = document.getElementById("text-content-example");
textContentDiv.textContent =
  "<strong>This text is plain using textContent!</strong>";
// The HTML tag <strong> will not be parsed, it will be shown as plain text.

// ----------------------------------------------------------------

// CREATE ELEMENT

// Step 3: Adding a new element to the DOM
const newParagraph = document.createElement("p"); // Create a new paragraph element
newParagraph.textContent = "This is a dynamically added paragraph!";
container.appendChild(newParagraph); // Append the new paragraph to the container

// ----------------------------------------------------------------

// STYLE ELEMENT
// Step 5: Styling elements via JavaScript
title.style.color = "blue"; // Change text color
title.style.fontSize = "2em"; // Change font size
newParagraph.style.backgroundColor = "lightgray"; // Add background color to the new paragraph

// using loop /

// Array of fruits
const fruits = ["Apple", "Banana", "Orange", "Mango", "Pineapple"];

// Access the unordered list in the DOM
const fruitList = document.getElementById("fruit-list");

// Use a for loop to create and add list items to the ul
for (let i = 0; i < fruits.length; i++) {
  // Create a new li element for each fruit
  const listItem = document.createElement("li");

  // Set the text of the li to the fruit name
  listItem.textContent = fruits[i];

  // Append the new li to the ul (fruit list)
  fruitList.appendChild(listItem);
}

// ---------------------------------------------------------------- list of students
// Initial list of students
let students = ["John", "Sarah", "Mike", "Anna"];

// Access the student list (ul) in the DOM
const studentList = document.getElementById("student-list");

// Function to render the student list dynamically
const renderStudents = () => {
  // Clear the existing list
  studentList.innerHTML = "";

  // Use forEach to create and append list items for students
  students.forEach((student, index) => {
    const listItem = document.createElement("li");
    // Use template literals to generate list item content
    listItem.innerHTML = `${
      index + 1
    }. ${student} <button class="remove" onclick="removeStudent(${index})">Remove</button>`;
    studentList.appendChild(listItem);
  });
};

// Call the function once to render the initial list
renderStudents();

// Direct function to add a new student without event listeners
const addStudent = (name) => {
  students.push(name); // Add new student to the array
  renderStudents(); // Re-render the updated list
};

// Direct function to remove a student without event listeners
const removeStudent = (index) => {
  students.splice(index, 1); // Remove the student from the array
  renderStudents(); // Re-render the updated list
};

// Add a new student directly through code (without user-triggered events)
addStudent("Jessica"); // Adding a new student as an example

// Bonus Step: Toggle a class for styling
title.classList.add("highlight"); // Add a class
console.log("Classes on title:", title.classList); // Show the list of classes
title.classList.toggle("highlight"); // Toggle the class on and off
