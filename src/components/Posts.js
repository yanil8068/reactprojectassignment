import React, { useState, useEffect } from "react";
import { GetDataFromApi } from "../GetDataFromApi"; // Import function to fetch data from API
import { Typography, Container } from "@mui/material"; // Import Material-UI components
import SearchBox from "./SearchBox"; // Import SearchBox component
import PagesIcon from "@mui/icons-material/Pages"; // Import PagesIcon from Material-UI icons
import PostList from "./PostList"; // Import PostList component

const Posts = () => {
  // State variables for posts data and search term
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Fetch posts data from the API when component mounts
  useEffect(() => {
    const getPosts = async () => {
      try {
        const data = await GetDataFromApi(); // Call function to fetch data
        setPosts(data); // Set fetched data to state
      } catch (error) {
        console.error("Cannot fetch posts", error); // Log error if fetch fails
      }
    };

    getPosts(); // Invoke function to fetch posts data
  }, []);

  // Handler function to update search term state
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value); // Update search term with input value
  };

  // Filter posts based on search term
  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.body.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container>
      {/* Header with title and icon */}
      <Typography
        sx={{
          textAlign: "center",
          marginBottom: "0px",
          marginTop: "10px",
          fontWeight: "800",
          color: "#FFF2D9",
        }}
        variant="h4"
        gutterBottom
      >
        <PagesIcon /> Post It
      </Typography>

      {/* Search box component */}
      <SearchBox
        searchTerm={searchTerm}
        handleSearchChange={handleSearchChange}
      />

      {/* Conditional rendering based on filtered posts */}
      {filteredPosts.length === 0 ? (
        // Display message if no posts match search criteria
        <Typography
          variant="body1"
          color="textSecondary"
          sx={{ width: "100%", textAlign: "center", marginTop: 2 }}
        >
          No posts match the search criteria.
        </Typography>
      ) : (
        // Render PostList component with filtered posts
        <PostList posts={filteredPosts} />
      )}
    </Container>
  );
};

export default Posts;
