import React from "react";
import { Box } from "@mui/material";

const MainHeader = () => {
  // Using an environment variable for the image URL could be an option
  // For example, you might have a variable REACT_APP_HEADER_IMAGE in your .env file
  // const imageUrl = process.env.REACT_APP_HEADER_IMAGE || "https://placehold.co/600x400";
  const imageUrl = "https://placehold.co/600x400"; // Directly using a placeholder URL for simplicity

  return (
    <Box
      sx={{
        position: "relative",
        height: "70vh", // Adjust height as needed
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${imageUrl})`, // Use the imageUrl variable here
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "20px", // Gives the card rounded corners
        overflow: "hidden", // Ensures no overflow from content
        p: 2, // Padding around the content inside the card
        marginLeft: "4.5rem",
        marginRight: "0.8rem",
        marginTop: "0.8rem",
        objectFit: "cover",
      }}
      mb={7}
    >
    </Box>
  );
};

export default MainHeader;
