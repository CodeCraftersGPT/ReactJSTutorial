const axios = require('axios');

// Your code here

// Define the API endpoint URL
const apiUrl = 'https://jsonplaceholder.typicode.com/posts/1';

// Make a GET request using Axios
axios.get(apiUrl)
  .then((response) => {
    // Handle the response data
    console.log('Data from the server:', response.data);
  })
  .catch((error) => {
    // Handle errors
    console.error('Request error:', error);
  });
