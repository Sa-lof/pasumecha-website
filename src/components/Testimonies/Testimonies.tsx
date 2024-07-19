import React from "react";
import Slider from "react-slick";
import {
  Typography,
  Button,
  Grid,
  Card,
  Box,
  CardContent,
} from "@mui/material";
import "slick-carousel/slick/slick.css"; // default styles
import "slick-carousel/slick/slick-theme.css"; // theme styles
import purple from "../../assets/pasu/purple.jpg";
import blue from "../../assets/pasu/blue.jpg";
import "./Testimonies.css";

const Testimonies = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false, // Hides the arrows
  };

  const testimonials = [
    "La comida en PASUMECHA es simplemente espectacular. Los sabores auténticos de Veracruz me hicieron sentir como en casa. ¡Definitivamente volveré!",
    "Un lugar maravilloso con un ambiente acogedor. Los mariscos frescos y el café lechero son mis favoritos. ¡Muy recomendable!",
    "El arroz a la tumbada es el mejor que he probado. PASUMECHA preserva las tradiciones veracruzanas de una manera excepcional.",
    "Cada visita a PASUMECHA es una experiencia única. El servicio es impecable y los platillos son de primera calidad.",
    "Un restaurante que destaca por su autenticidad y sabor. Perfecto para disfrutar de una comida en familia o con amigos.",
  ];

  return (
    <Grid container spacing={2} sx={{ display: "flex" }} mb={3}>
      <Grid item xs={12} md={6} sx={{ display: "flex" }}>
        <Card
          elevation={4}
          sx={{
            position: "relative",
            backgroundImage: `url(${blue})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "#303f9f",
            color: "white",
            borderRadius: "20px",
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
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
              backgroundColor: "rgba(0, 0, 0, 0.6)",
              zIndex: 1,
            }}
          ></Box>
          <CardContent
            sx={{
              position: "relative",
              zIndex: 2,
              flexGrow: 1,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: { xs: 2, sm: 4, md: 6 },
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontWeight: "bold",
                fontFamily: "Poppins",
                fontSize: { xs: "20px", sm: "24px", md: "28px" },
                textAlign: "center",
              }}
            >
              ¿Qué opinan nuestros clientes?
            </Typography>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: { xs: "14px", sm: "16px", md: "18px" },
                my: 2,
                textAlign: "center",
              }}
            >
              En PASUMECHA, nos enorgullece ofrecer una experiencia gastronómica
              auténtica que captura la esencia de la comida veracruzana.
              Nuestros clientes valoran no solo la calidad de nuestros
              platillos, sino también el ambiente acogedor y el excelente
              servicio que brindamos.
            </Typography>

            <Button
              variant="contained"
              href="https://maps.app.goo.gl/Yes7oCjShGr13A4e6"
              target="_blank"
              sx={{
                backgroundColor: "#812F70",
                fontFamily: "Poppins",
                borderRadius: "10px",
                textTransform: "none",
                fontWeight: 600,
                padding: "8px 24px",
                "&:hover": { backgroundColor: "#7c4dff" },
                fontSize: { xs: "12px", sm: "14px", md: "16px" },
                alignSelf: "center",
              }}
            >
              Califícanos en Google
            </Button>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} sx={{ display: "flex" }}>
        <Card
          elevation={4}
          sx={{
            backgroundImage: `url(${purple})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "white",
            borderRadius: "20px",
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <CardContent
            sx={{
              flexGrow: 1,
              backgroundColor: "rgba(0,0,0,0)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              paddingBottom: 0,
            }}
          >
            <Slider {...settings}>
              {testimonials.map((text, index) => (
                <div
                  key={index}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",

                  }}
                >
                  <Typography
                    sx={{
                      fontSize: { xs: "1rem", sm: "1.25rem", md: "1.5rem" },
                      fontFamily: "Poppins",
                      fontWeight: "bold",
                      textAlign: "center",
                    }}
                  >
                    {text}
                  </Typography>
                </div>
              ))}
            </Slider>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Testimonies;
