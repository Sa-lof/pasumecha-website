import React from "react";
import { Typography, Box, Card } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import baguette from "../../assets/menu/baguette.avif";
import sincronizada from "../../assets/menu/sincronizada.jpeg";
import mollete from "../../assets/menu/mollete.webp";
import picada from "../../assets/menu/picadas.webp";
import enchilada from "../../assets/menu/enchilada.jpeg";
import hotcake from "../../assets/menu/hotcake.webp";
import cochinita from "../../assets/menu/cochinita.jpeg";
import tacos from "../../assets/menu/tacos.jpeg";
import club from "../../assets/menu/club.avif";
import milanesa from "../../assets/menu/milanesa.jpeg";
import omellete from "../../assets/menu/omellete.jpeg";
import pollo from "../../assets/menu/pollo.jpeg";
import aguas from "../../assets/menu/aguas.jpeg";
import coctel from "../../assets/menu/coctel.jpeg";
import smoothie from "../../assets/menu/smoothie.webp";
import papas from "../../assets/menu/papas.png";
import postre from "../../assets/menu/postres.jpeg";
import jugo from "../../assets/menu/jugos.webp";

const Menu = () => {
  const cards = [
    { id: 1, title: "Baguettes", imageUrl: baguette },
    { id: 2, title: "Sincronizadas", imageUrl: sincronizada },
    { id: 3, title: "Molletes", imageUrl: mollete },
    { id: 4, title: "Picadas", imageUrl: picada },
    { id: 5, title: "Enchiladas", imageUrl: enchilada },
    { id: 6, title: "Hot Cakes", imageUrl: hotcake },
    { id: 7, title: "Cochinita", imageUrl: cochinita },
    { id: 8, title: "Tacos Dorados", imageUrl: tacos },
    { id: 9, title: "Club Sandwich", imageUrl: club },
    { id: 10, title: "Milanesa", imageUrl: milanesa },
    { id: 11, title: "Omellete", imageUrl: omellete },
    { id: 12, title: "Pollo Frito", imageUrl: pollo },
    { id: 13, title: "Aguas Frescas", imageUrl: aguas },
    { id: 14, title: "Coctel de Frutas", imageUrl: coctel },
    { id: 15, title: "Smoothies", imageUrl: smoothie },
    { id: 16, title: "Papas Preparadas", imageUrl: papas },
    { id: 17, title: "Postres", imageUrl: postre },
    { id: 18, title: "Jugos", imageUrl: jugo },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1, slidesToScroll: 1, initialSlide: 1 },
      },
    ],
  };

  return (
    <Box sx={{ flexGrow: 1, overflow: "hidden" }} mb={3}>
      <Typography
        variant="h4"
        gutterBottom
        component="h4"
        mb={3}
        sx={{ fontWeight: "bold", fontFamily: "Poppins" }}
      >
        Conoce nuestro menú
      </Typography>
      <Slider {...settings}>
        {cards.map((card) => (
          <Box key={card.id} sx={{ padding: "10px", boxSizing: "border-box" }}>
            <Card
              sx={{
                height: 265.55,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "right",
                borderRadius: "20px",
                width: "100%",
                backgroundImage: `url(${card.imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                boxShadow: 3,
                color: "white",
                position: "relative", // Needed for pseudo-element positioning
                "&::before": {
                  // Pseudo-element for overlay
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  backgroundColor: "rgba(0,0,0,0.2)", // Semi-transparent black
                },
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  p: 2,
                  textAlign: "end",
                  fontFamily: "Poppins",
                  fontWeight: "bold",
                  textTransform: "uppercase",
                  position: "relative", // Ensures text is on top of the pseudo-element
                  zIndex: 1,
                }}
              >
                {card.title}
              </Typography>
            </Card>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default Menu;
