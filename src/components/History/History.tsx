import React, { useState } from "react";
import { Card, CardContent, Typography, Button, Modal, Box } from "@mui/material";
import yellow from "../../assets/pasu/yellow.jpeg";  // Ensure this is the correct path to your image file

const History = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card
      sx={{
        backgroundImage: `url(${yellow})`,
        backgroundSize: "cover",  // Cover ensures that the background image covers the entire element
        backgroundPosition: "center",  // Centers the background image within the card
        backgroundRepeat: "no-repeat",  // Prevents the image from repeating
        color: "#ffffff",
        position: "relative",
        height: "70vh",  // Adjustable based on your design requirements
        width: "100%",  // Takes full width of the container
        boxSizing: "border-box",
        border: "none",
        borderRadius: "20px",
        objectFit: "cover"
      }}
    >
      <CardContent
        sx={{
          padding: "16px",
          backgroundColor: "rgba(0,0,0,0.4)",  // Slightly more opaque for text readability
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100%",  // Ensures the content uses the full height of the card
        }}
      >
        <Typography variant="h4" component="h2" gutterBottom sx={{ textAlign: "center", fontWeight: "bold" , fontFamily: "Poppins"}}>
          La historia de PASUMECHA
        </Typography>
        <Typography sx={{ textAlign: "center", mb: 2, fontFamily: "Poppins" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum.
        </Typography>
        <Button
          variant="contained"
          onClick={handleOpen}
          sx={{
            alignSelf: "center",
            backgroundColor: "#323D8F",
            borderRadius: "10px",
            fontFamily: "Poppins",
            fontWeight: "600"
          }}
        >
          Ver video
        </Button>
      </CardContent>

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
            outline: "none",
            background: "white",
            padding: 2,
            borderRadius: 2,
            maxWidth: "90%",  // Ensures modal does not go beyond the viewport width
            maxHeight: "90vh",  // Ensuring modal content is responsive
            overflow: "auto",  // Adds scroll to modal if content is too large
          }}
        >
          <iframe
            title="PASUMECHA History Video"
            width="100%"  // Responsive width
            height="315"  // Fixed height; consider making it responsive
            src="https://www.youtube.com/embed/YOUR_VIDEO_ID"  // Replace with your actual video URL
            allow="autoplay; encrypted-media"
            style={{ border: "none" }}  // Removes iframe border
          ></iframe>
        </Box>
      </Modal>
    </Card>
  );
};

export default History;
