import React from "react";

import { List, ListItem, ListItemText } from "@mui/material";

const PostList = ({ posts }) => {
  return (
    <List>
      {/* Map through each post and render a ListItem for each */}
      {posts.map((post) => (
        <ListItem
          key={post.id}
          sx={{
            backgroundColor: "#6DC5D1",
            marginBottom: "10px",
            borderRadius: "10px",
            "&:hover": {
              sm: { backgroundColor: "#6DC5D1" },
              md: { backgroundColor: "#41767d" },
              lg: { backgroundColor: "#41767d" },
            },
          }}
        >
          <ListItemText
            primary={post.title}
            secondary={post.body}
            primaryTypographyProps={{ variant: "h6", sx: { fontWeight: 500 } }}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default PostList;
