import React, { useState } from "react";
import { Typography, Button, Modal, Box } from "@mui/material";
import yellow from "../../assets/pasu/green.jpg"; // Ensure this is the correct path to your image file

const History = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        height: "100vh", // Adjust to ensure the image fits well
        width: "100%",
        borderRadius: "20px",
        marginBottom: 3,
        "&:before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${yellow})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          zIndex: -1,
        },
      }}
      id="history"
    >
      <Box
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
          padding: { xs: 1, sm: 2, md: 3, lg: 4 }, // Responsive padding
          backgroundColor: "rgba(0,0,0,0.6)", // Slightly dark background for text readability
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "white",
            textAlign: "center",
            fontWeight: "bold",
            fontFamily: "Poppins",
            fontSize: { xs: "24px", sm: "32px", md: "40px", lg: "48px" }, // Responsive font sizes
            mb: { xs: 2, sm: 3 }, // Responsive margin bottom
          }}
        >
          La historia de PASUMECHA
        </Typography>

        <Typography
          sx={{
            color: "white",
            textAlign: "center",
            mb: { xs: 2, sm: 3, md: 4 }, // Responsive margin bottom
            fontFamily: "Poppins",
            fontSize: { xs: "12px", sm: "16px", md: "18px", lg: "24px" }, // Responsive font sizes
            px: { xs: 2, sm: 5, md: 10, lg: 20 }, // Responsive padding left and right
          }}
        >
          PASUMECHA fue fundada por Guadalupe Girón Rodríguez, quien ha estado
          en la Plaza Acuario durante 35 años con su restaurante, preservando
          las tradiciones de la comida típica veracruzana. Este restaurante es
          conocido por su ambiente acogedor y la calidad de sus platillos, que
          transportan a sus comensales a una experiencia auténtica de Veracruz.
          Entre los platillos más destacados se encuentran el arroz a la
          tumbada, las picadas, los mariscos frescos y el emblemático café
          lechero. PASUMECHA se ha convertido en un punto de referencia
          gastronómica en la región, atrayendo tanto a locales como a turistas
          que buscan deleitarse con los sabores tradicionales de Veracruz.
        </Typography>
        <Button
          onClick={handleOpen}
          variant="contained"
          sx={{
            backgroundColor: "#323D8F",
            fontFamily: "Poppins",
            borderRadius: "10px",
            textTransform: "none",
            fontWeight: 600,
            padding: { xs: "8px 16px", sm: "10px 20px", md: "12px 24px" }, // Responsive padding
            "&:hover": { backgroundColor: "#7c4dff" },
            fontSize: { xs: "12px", sm: "14px", md: "16px", lg: "18px" }, // Responsive font sizes
          }}
        >
          Ver video
        </Button>
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="video-modal-title"
        aria-describedby="video-modal-description"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            background: "white",
            borderRadius: 2,
            padding: 2,
            width: "90%", // Adjusted to 90%
            maxWidth: "900px", // Max width for large screens
            maxHeight: "90vh",
            overflow: "auto",
          }}
        >
          <iframe
            title="PASUMECHA History Video"
            width="100%" // Adjusted to 100%
            height="480" // Adjust height as needed
            src="https://www.youtube.com/embed/imH4vh0ddDI" // Replace with your actual video URL in embed format
            allow="autoplay; encrypted-media"
            style={{ border: "none" }}
          ></iframe>
        </Box>
      </Modal>
    </Box>
  );
};

export default History;
