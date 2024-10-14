// Define the base URL for the API
const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

// Function for GET request
function getPost(postId) {
  fetch(`${BASE_URL}/${postId}`)
    .then((response) => {
      if (response.status === 200) {
        return response.json();
      } else {
        throw new Error(`GET request failed with status: ${response.status}`);
      }
    })
    .then((data) => {
      console.log("GET Response Data:", data);
    })
    .catch((error) => console.error("Error:", error));
}

// Function for POST request
function createPost() {
  fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      title: "New Post Title",
      body: "This is the content of the new post",
      userId: 1,
    }),
  })
    .then((response) => {
      if (response.status === 201) {
        // 201 indicates resource created
        return response.json();
      } else {
        throw new Error(`POST request failed with status: ${response.status}`);
      }
    })
    .then((data) => {
      console.log("POST Response Data:", data);
    })
    .catch((error) => console.error("Error:", error));
}

// Function for PUT request
function updatePost(postId) {
  fetch(`${BASE_URL}/${postId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id: postId,
      title: "Updated Post Title",
      body: "This is the updated content of the post",
      userId: 1,
    }),
  })
    .then((response) => {
      if (response.status === 200) {
        // 200 indicates success
        return response.json();
      } else {
        throw new Error(`PUT request failed with status: ${response.status}`);
      }
    })
    .then((data) => {
      console.log("PUT Response Data:", data);
    })
    .catch((error) => console.error("Error:", error));
}

// Function for DELETE request
function deletePost(postId) {
  fetch(`${BASE_URL}/${postId}`, {
    method: "DELETE",
  })
    .then((response) => {
      if (response.status === 200 || response.status === 204) {
        console.log(`Post with ID ${postId} deleted successfully`);
      } else {
        throw new Error(
          `DELETE request failed with status: ${response.status}`
        );
      }
    })
    .catch((error) => console.error("Error:", error));
}

// Call each function to demonstrate different HTTP requests
getPost(1); // GET request to fetch a single post
createPost(); // POST request to create a new post
updatePost(1); // PUT request to update an existing post
deletePost(1); // DELETE request to delete a post
