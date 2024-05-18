import React from "react";
import { Grid, Card, CardMedia } from "@mui/material";
import A1 from "../../assets/gallery/A1.png";

const Gallery = () => {
  // Example image URLs; replace these with your actual image URLs
  const images = [
    A1,
    "https://placeimg.com/640/480/any",
    "https://placeimg.com/640/480/any",
    "https://placeimg.com/640/480/any",
    "https://placeimg.com/640/480/any",
    "https://placeimg.com/640/480/any",
  ];

  return (
    <Grid container spacing={2} mb={3}>
      {images.map((image, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card sx={{borderRadius: "20px"}}>
            <CardMedia
              component="img"
              image={image}
              alt={`Gallery image ${index + 1}`}
            />
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default Gallery;
