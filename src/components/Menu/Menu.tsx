import React from "react";
import { Grid, Typography, Box, Card } from "@mui/material";

const Menu = () => {
  // Dummy data for the menu cards
  const cards = [1, 2, 3, 4]; // Assuming you have four cards

  return (
    <Box
      sx={{
        flexGrow: 1,

      }}
      mb={7}
    >
      <Typography variant="h4" gutterBottom component="h4" mb={3} sx={{fontWeight: "bold", fontFamily: "Poppins"}}>
        Conoce nuestro menú
      </Typography>
      <Grid container spacing={2}>
        {cards.map((card, index) => (
          <Grid item xs={12} sm={6} md={3} key={card}>
            <Card
              sx={{
                height: 265.55,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: "20px",
              }}
            >
              {`Card ${card}`}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Menu;
