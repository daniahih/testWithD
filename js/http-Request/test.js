const request = fetch("https://jsonplaceholder.typicode.com/posts");
console.log(request);
const DataFromServer = [];
request
  .then((response) => {
    //after see what inside the request using the log
    //   console.log(response);
    // let return it
    return response.json();
  })
  .then((data) => {
    console.log(data);
    // of course i can do wat ever i want in the data
    // DataFromServer.push(...data);

    // here you can use the data to do something with it.
  })
  .catch((err) => {
    //TSEST THE ERROR BY DELETEING SOME OF THE URL
    console.log("error: " + err);
  });
// now this is the get request in the get request what i care is  i want the data to be in a json format and i wan to see it

// for the POST request you can do something like this
const dataToSend = { title: "foo", body: "bar", userId: 1 };
const postRequest = fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(dataToSend),
});
postRequest
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));

// for PUT request you can do something like this
const dataToSendForPut = {
  title: "updatedTitle",
  body: "updatedBody",
  userId: 1,
};
const putRequest = fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(dataToSendForPut),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));

// for DELETE request you can do something like this
const deleteRequest = fetch("https://jsonplaceholder.typicode.com/posts/1", {
  method: "DELETE",
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));
