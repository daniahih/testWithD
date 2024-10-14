function printFirstName() {
  console.log("dania");
}

printFirstName();

setTimeout(() => {
  console.log("hi dania");
}, 3000);

console.log("hi there ");




/ // sync
// console.log(1);
// console.log(2);
// console.log(3);
// // none blocking - async
// console.log(1);
// setTimeout(() => {
//     console.log(2);
// }, 1000);
// console.log(3);
// realstic example - nodejs not browser
const fs = require("fs");
// console.log(1);
// fs.readFile("file1.txt", "utf8", (err, data) => {
//     console.log('data', data);
//     const newData = data.toUpperCase();
//     fs.writeFile("file2.txt", newData, () => {
//         console.log("writing complete");
//         fs.readFile("file2.txt", "utf8", (err, data) => {
//             if (data === newData) {
//                 console.log("writing checks out");
//             }
//         });
//     }); // async
// });
// console.log(2);
// async is good with non blocking
// problem with async - if i want to do somehting ONLY AFTER
// the async was complete - how do i do that?
// callback - fn that run only after the operation is complete
// read file
// uppercase
// write to a new file
// load new file - to check if was written ok
// problem solved - chain async operations in a specific order
// callback hell
// side note - promises
const p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(123);
    }, 5000);
});
p1
    .then((res) => {
        console.log("resolved");
    })
    .catch((res) => {
        console.log("rejcetd");
    });
10:36
browser callback hell and fix with promises:
const div = document.getElementById("write");
// window.onload = () => {
//   div.style.color = "red";
//   setTimeout(() => {
//     div.style.fontSize = "50px";
//     setTimeout(() => {
//       div.style.fontStyle = "italic";
//       setTimeout(() => {
//         div.style.color = "purple";
//       }, 5000);
//     }, 5000);
//   }, 5000);
// };

// just colors

window.onload = () => {
  div.style.backgroundColor = "red";
  setTimeout(() => {
    div.style.backgroundColor = "green";
    setTimeout(() => {
      div.style.backgroundColor = "blue";
      setTimeout(() => {
        div.style.backgroundColor = "yellow";
      }, 5000);
    }, 5000);
  }, 5000);
};

// promises

function changeBGC(color) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      div.style.backgroundColor = color;
      resolve();
    }, 5000);
  });
}

window.onload = () => {
  changeBGC("red")
    .then(() => { return changeBGC("green"); })
    .then(() => { return changeBGC("blue"); })
    .then(() => { return changeBGC("yellow"); });
};

const p2 = new Promise((res, rej) => {
  // code 
});
