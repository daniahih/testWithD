// const age = 19;
// if (age >= 18) {
//   console.log("you are an adult");
// } else if (age >= 13) {
//   console.log("you are a teenager");
// } else {
//   console.log("you are a kid");
// }

// const isOpen = false;
// isOpen ? console.log("true , dania") : console.log("false");

// const name = "";
// // console.log(typeof name);
// if (name) {
//   console.log("theres a name ");
// }

// const isAttendence = false;
// const EmployeeName = "ibrahim";
// if (EmployeeName === "shadi" || isAttendence) {
//   console.log("you will got more salary shadi ");
// } else {
//   console.log("you will got less salary shadi ");
// }

let day = "Friday";

switch (day) {
  case "Monday":
    console.log("Start of the work week.");
    break;
  case "Wednesday":
    console.log("Midweek!");
    break;
  case "Friday":
    console.log("Almost the weekend!");
    break;
  default:
    console.log("It's just another day");
}

// !==

let num1 = 5;
let num2 = "5";

if (num1 != num2) {
  console.log("num1 and num2 are not equal");
} else {
  console.log("num1 and num2 are equal");
}
