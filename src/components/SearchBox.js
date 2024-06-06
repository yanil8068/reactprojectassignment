import React from "react";
import { TextField, Box } from "@mui/material";

const SearchBox = ({ searchTerm, handleSearchChange }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        marginBottom: 2,
        width: "100%",
        borderRadius: "10px",
      }}
    >
      {/* TextField for searching posts */}
      <TextField
        label="Search Posts"
        variant="filled"
        fullWidth
        margin="normal"
        value={searchTerm}
        onChange={handleSearchChange}
        sx={{
          width: "100%",
          backgroundColor: "#FFF2D7",
          color: "black",
          borderRadius: "10px",
        }}
        InputLabelProps={{
          style: { color: "black" },
          BorderBottom: 0,
        }}
      />
    </Box>
  );
};

export default SearchBox;
