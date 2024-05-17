import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: 60, // adjust height as needed
        backgroundColor: "#6CC048", // adjust the color to match your design
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        borderRadius: "20px",
      }}
    >
      <Typography
        variant="body1"
        color="white"
        sx={{ fontFamily: "Poppins", fontWeight: 600, fontSize: "16px" }}
      >
        Copyright © 2024 by{" "}
        <a
          href="https://amoxtli.tech/"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none", color: "inherit", cursor: "pointer" }}
        >
          Amoxtli Web Developers
        </a>
      </Typography>
    </Box>
  );
};

export default Footer;
