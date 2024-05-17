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
          padding: { xs: 2, sm: 3, md: 4 }, // Responsive padding
          backgroundColor: "rgba(0,0,0,0.2)", // Slightly dark background for text readability
        }}
      >
        <Typography
          variant="h4"
          sx={{
            color: "white",
            textAlign: "center",
            fontWeight: "bold",
            fontFamily: "Poppins",
            fontSize: { xs: "32px", sm: "48px", md: "56px" }, // Responsive font sizes
            mb: { xs: 2, sm: 3 }, // Responsive margin bottom
          }}
        >
          La historia de PASUMECHA
        </Typography>
        <Typography
          variant="h4"
          sx={{
            color: "white",
            textAlign: "center",
            fontWeight: 600,
            fontFamily: "Poppins",
            fontSize: { xs: "20px", sm: "24px", md: "28px" }, // Responsive font sizes
            mb: 2,
          }}
        >
          La historia de PASUMECHA
        </Typography>
        <Typography
          sx={{
            color: "white",
            textAlign: "center",
            mb: { xs: 4, sm: 5 }, // Responsive margin bottom
            fontFamily: "Poppins",
            fontSize: { xs: "16px", sm: "18px", md: "20px" }, // Responsive font sizes
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
          lacinia odio vitae vestibulum.
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
            fontSize: { xs: "14px", sm: "16px", md: "18px" }, // Responsive font sizes
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
            src="https://www.youtube.com/embed/dQw4w9WgXcQ" // Replace with your actual video URL
            allow="autoplay; encrypted-media"
            style={{ border: "none" }}
          ></iframe>
        </Box>
      </Modal>
    </Box>
  );
};

export default History;
