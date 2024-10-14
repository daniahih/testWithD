// fetch("https://6707bb388e86a8d9e42cb0d0.mockapi.io/shoeApp")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// console.log("dania");

// POST request example
// const newShoe = {
//   name: "nike",
//   price: 100,

//   image:
//     "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfsKcLtcDvagrqCxPXwH7LG9Nddg1K83l6tQ&s",
// };
// fetch("https://67077330a0e04071d22a5887.mockapi.io/shoeApp", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(newShoe),
// })
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// // PUT request example
// const updatedShoe = {
//   id: 1,
//   name: "jordan",
// };

// fetch(`https://67077330a0e04071d22a5887.mockapi.io/shoeApp/${updatedShoe.id}`, {
//   method: "PUT",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(updatedShoe),
// })
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

const request = fetch("https://6707c90e8e86a8d9e42ce9fd.mockapi.io/adiStore");
request
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log("data", data);
  })
  .catch((err) => {
    console.log(err);
  });

const newShoe = {
  name: "Nike",
  price: 100,
  image:
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfsKcLtcDvagrqCxPXwH7LG9Nddg1K83l6tQ&s",
};

//   post method
fetch("https://6707c90e8e86a8d9e42ce9fd.mockapi.io/adiStore", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(newShoe),
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log("data", data);
  })
  .catch((err) => {
    console.log(err);
  });

//   put method

const updatedShoe = {
  id: 15,
  name: "addidas",
};

fetch("https://6707c90e8e86a8d9e42ce9fd.mockapi.io/adiStore/15", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(updatedShoe),
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log("data", data);
  })
  .catch((err) => {
    console.log(err);
  });

//   delete method
fetch("https://6707c90e8e86a8d9e42ce9fd.mockapi.io/adiStore/1", {
  method: "DELETE",
})
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log("data", data);
  })
  .catch((err) => {
    console.log(err);
  });
