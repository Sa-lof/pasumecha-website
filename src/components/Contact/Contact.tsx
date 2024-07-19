import React, { useState } from "react";
import { Grid, Box, TextField, Button, Typography } from "@mui/material";
import darkGreen from "../../assets/pasu/dark-green.jpg"; // Ensure this is the correct path to your image file

const Contact = () => {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [mensaje, setMensaje] = useState("");
  const whatsappNumber = "+525545205572";

  const handleSendMessage = () => {
    const formattedMessage = `Hola! Me gustaría obtener más información sobre PA'SUMECHA.\n\nNombre: ${nombre}\nCorreo: ${correo}\nTeléfono: ${telefono}\nMensaje: ${mensaje}`;
    const encodedMessage = encodeURIComponent(formattedMessage);
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <Grid
      container
      spacing={2}
      sx={{ height: { xs: "auto", md: "50vh" }, mb: { xs: 1, md: 3 } }}
      id="contact"
    >
      <Grid item xs={12} md={7}>
        <Box
          sx={{
            width: "100%",
            height: { xs: "300px", md: "100%" },
            overflow: "hidden",
            borderRadius: "20px",
          }}
        >
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60291.164815157055!2d-96.16371883046875!3d19.186561100000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85c346ce761cccfb%3A0x25569f96a7474ca8!2sPa%20Su%20Mecha!5e0!3m2!1ses!2smx!4v1715911188490!5m2!1ses!2smx"
            loading="lazy"
            title="map"
          ></iframe>
        </Box>
      </Grid>
      <Grid item xs={12} md={5}>
        <Box
          sx={{
            width: "100%",
            height: { xs: "auto", md: "100%" },
            backgroundImage: `url(${darkGreen})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "20px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              bgcolor: "rgba(0, 0, 0, 0.5)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: { xs: 2, md: 10 },
            }}
          >
            <Typography
              variant="h6"
              sx={{
                mb: 2,
                color: "white",
                fontFamily: "Poppins",
                fontWeight: "bold",
                fontSize: { xs: "1.5rem", md: "36px" }, // Responsive font size
              }}
            >
              Contáctanos
            </Typography>
            <Box
              component="form"
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                gap: { xs: 1, md: 2 },
              }}
            >
              <TextField
                label="Nombre"
                variant="filled"
                fullWidth
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                sx={{
                  backgroundColor: "white",
                  color: "#16A468",
                  borderRadius: "10px",
                }}
              />
              <TextField
                label="Correo"
                variant="filled"
                fullWidth
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                sx={{
                  backgroundColor: "white",
                  color: "#16A468",
                  borderRadius: "10px",
                }}
              />
              <TextField
                label="Número de teléfono"
                variant="filled"
                fullWidth
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
                sx={{
                  backgroundColor: "white",
                  color: "#16A468",
                  borderRadius: "10px",
                }}
              />
              <TextField
                label="Mensaje"
                variant="filled"
                fullWidth
                multiline
                rows={4}
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                sx={{
                  backgroundColor: "white",
                  color: "#16A468",
                  borderRadius: "10px",
                }}
              />
              <Button
                variant="contained"
                sx={{
                  bgcolor: "#16A468",
                  color: "white",
                  fontFamily: "Poppins",
                  borderRadius: "10px",
                  fontWeight: 600,
                  "&:hover": { bgcolor: "#6CC048" },
                }}
                onClick={handleSendMessage}
              >
                Enviar
              </Button>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Contact;
