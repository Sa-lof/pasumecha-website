import React from "react";
import { Box } from "@mui/material";
import city from "../../assets/pasu/city.jpg";

const MainHeader = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: "80vh", sm: "70vh", md: "90vh" }, // Responsive height
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundImage: `url(${city})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        borderRadius: "20px",
        overflow: "hidden",
        p: { xs: 2, sm: 3, md: 4 }, // Responsive padding
      }}
      mb={3}
    ></Box>
  );
};

export default MainHeader;
