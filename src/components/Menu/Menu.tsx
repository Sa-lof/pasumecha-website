import React from "react";
import { Typography, Box, Card } from "@mui/material";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Menu = () => {
  const cards = [
    { id: 1, title: "Dish 1", imageUrl: "url-to-image-1.jpg" },
    { id: 2, title: "Dish 2", imageUrl: "url-to-image-2.jpg" },
    { id: 3, title: "Dish 3", imageUrl: "url-to-image-3.jpg" },
    { id: 4, title: "Dish 4", imageUrl: "url-to-image-4.jpg" }
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
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1, initialSlide: 1 } }
    ]
  };

  return (
    <Box sx={{ flexGrow: 1, overflow: "hidden" }} mb={3}>
      <Typography variant="h4" gutterBottom component="h4" mb={3} sx={{fontWeight: "bold", fontFamily: "Poppins"}}>
        Conoce nuestro menú
      </Typography>
      <Slider {...settings}>
        {cards.map((card) => (
          <Box key={card.id} sx={{ padding: '10px', boxSizing: 'border-box' }}>
            <Card
              sx={{
                height: 265.55,
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-end",
                alignItems: "center",
                borderRadius: "20px",
                width: '100%',
                backgroundImage: `url(${card.imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                boxShadow: 3,
                color: "white"
              }}
            >
              <Typography variant="h6" sx={{ p: 2, width: '100%', textAlign: "center", fontFamily: "Poppins", fontWeight: 600, color: "black" }}>
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
