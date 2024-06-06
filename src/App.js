// Import React library
import React from "react";
// Import Posts component from components folder
import Posts from "./components/Posts";
// Import Container component from Material-UI
import { Container } from "@mui/material";

// Define functional component App
function App() {
  // Return JSX for rendering
  return (
    // Use Container component from Material-UI for layout
    <Container>
      {/* Render Posts component */}
      <Posts />
    </Container>
  );
}

// Export App component
export default App;
