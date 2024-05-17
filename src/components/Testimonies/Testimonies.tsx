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
    "Testimonio 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    "Testimonio 2 Pellentesque ac bibendum tortor.",
    "Testimonio 3 Sed ultrices ipsum non mattis pharetra.",
    "Testimonio 4 Integer non ligula libero.",
    "Testimonio 5 Maecenas fermentum ut ante at interdum.",
  ];

  return (
    <Grid container spacing={2} sx={{ display: "flex" }} mb={3}>
      <Grid item xs={12} md={6} sx={{ display: "flex" }}>
        <Card
          elevation={4}
          sx={{
            backgroundImage: `url(${blue})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundColor: "#303f9f",
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
              backgroundColor: "rgba(0,0,0,0.1)",
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
              Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
              ipsum Lorem ipsum Lorem ipsum Lorem ipsum
            </Typography>
            <Button
              variant="contained"
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
                <Box
                  key={index}
                  sx={{
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
                </Box>
              ))}
            </Slider>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Testimonies;
