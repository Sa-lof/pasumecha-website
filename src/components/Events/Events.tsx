import React from "react";
import { CardContent, Typography, Button, Box } from "@mui/material";
import red from "../../assets/pasu/red.jpg";

const Events = () => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "20px",
        height: { xs: 300, sm: 350, md: 500 }, // Responsive heights
        mb: 3,
        width: "100%", // Takes full width of its container
      }}
    >
      <img
        src={red}
        alt="Events"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)", // Centers the image
        }}
      />
      <CardContent
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          backgroundColor: "rgba(0, 0, 0, 0.3)", // Adds a slight overlay for text readability
          padding: { xs: 2, sm: 3, md: 4 }, // Responsive padding
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          textAlign="center"
          sx={{
            fontFamily: "Poppins",
            fontWeight: "bold",
            fontSize: { xs: "24px", sm: "36px", md: "56px" }, // Responsive font sizes
          }}
        >
          ¿Tienes un evento?
        </Typography>
        <Typography
          textAlign="center"
          sx={{
            mb: 2,
            fontFamily: "Poppins",
            fontSize: { xs: "14px", sm: "18px", md: "24px" }, // Responsive font sizes
            fontWeight: 500,
          }}
        >
          Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
          ipsum Lorem ipsum Lorem ipsum Lorem ipsum
        </Typography>
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#323D8F",
            fontFamily: "Poppins",
            borderRadius: "10px",
            textTransform: "none",
            fontWeight: 600,
            padding: { xs: "6px 16px", sm: "8px 20px", md: "8px 24px" }, // Responsive padding
            "&:hover": { backgroundColor: "#7c4dff" },
            fontSize: { xs: "12px", sm: "14px", md: "16px" }, // Responsive font sizes
          }}
        >
          Cotiza con PASUMECHA
        </Button>
      </CardContent>
    </Box>
  );
};

export default Events;
