// Import the axios library for making HTTP requests
import axios from "axios";

// Define the API URL to fetch posts
const API_URL = "https://jsonplaceholder.typicode.com/posts";

// Define an asynchronous function to fetch data from the API
export const GetDataFromApi = async () => {
  try {
    // Send a GET request to the API URL and await the response
    const response = await axios.get(API_URL);
    // Extract the data from the response and return it
    return response.data;
  } catch (error) {
    // If an error occurs during the request, log the error to the console
    console.error("Cannot fetch posts", error);
    // Throw the error to handle it in the calling code
    throw error;
  }
};
