import React from "react";
import { Grid, Card, CardMedia } from "@mui/material";
import A1 from "../../assets/gallery/A1.jpg";
import A2 from "../../assets/gallery/A2.jpg";
import A3 from "../../assets/gallery/A3.jpg";
import A4 from "../../assets/gallery/A4.jpg";
import A5 from "../../assets/gallery/A5.jpg";

const Gallery = () => {
  // Example image URLs and video URL
  const items = [
    { type: "image", src: A1 },
    {
      type: "video",
      src: "https://www.youtube.com/embed/tsEXWhQ_4aQ?autoplay=1&mute=1&loop=1&playlist=tsEXWhQ_4aQ",
    },
    { type: "image", src: A2 },
    { type: "image", src: A3 },
    { type: "image", src: A4 },
    { type: "image", src: A5 },
  ];

  return (
    <Grid container spacing={2} mb={3}>
      {items.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card sx={{ borderRadius: "20px", height: "100%" }}>
            {item.type === "image" ? (
              <CardMedia
                component="img"
                image={item.src}
                alt={`Gallery item ${index + 1}`}
                sx={{ height: "100%", objectFit: "cover" }}
              />
            ) : (
              <CardMedia
                component="iframe"
                src={item.src}
                title={`Gallery video ${index + 1}`}
                sx={{ height: "100%", border: 0 }}
                allow="autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Gallery;
