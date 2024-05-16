import React, { useState } from "react";
import {
  AppBar,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Box,
  Typography,
  Stack,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const list = () => (
    <div role="presentation" onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
      <List>
        {["Menú", "Historia", "Eventos", "Contacto"].map((text, index) => (
          <ListItem key={text} component={Link} to={"/" + text.toLowerCase()} sx={{ fontFamily: "Poppins", fontWeight: "bold" }}>
            <ListItemText primary={text} primaryTypographyProps={{
              sx: { fontWeight: 'bold', color: 'white', fontFamily: 'Poppins' }
            }}/>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar
        position="fixed"
        sx={{
          width: 60,
          height: "100%",
          backgroundColor: "#E3222A",
          flexDirection: "column",
          justifyContent: "space-between",
          overflow: "hidden",
          left: 0,
        }}
      >
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={toggleDrawer(true)}
          sx={{
            margin: "16px 0",
            alignSelf: "center",
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{
            writingMode: "vertical-lr",
            transform: "rotate(180deg)",
            color: "white",
            alignSelf: "center",
            fontWeight: "bold",
            fontFamily: "Poppins"
          }}
        >
          PASUMECHA
        </Typography>
        <Stack
          direction="column"
          sx={{ mb: 2, width: "100%" }}
          alignItems="center"
        >
          <ListItem component="a" href="https://facebook.com" sx={{ width: "auto", p: 0, mb: 2 }}>
            <FacebookIcon sx={{ color: "white" }} />
          </ListItem>
          <ListItem component="a" href="https://instagram.com" sx={{ width: "auto", p: 0, mb: 2 }}>
            <InstagramIcon sx={{ color: "white" }} />
          </ListItem>
          <ListItem component="a" href="https://twitter.com" sx={{ width: "auto", p: 0 }}>
            <TwitterIcon sx={{ color: "white" }} />
          </ListItem>
        </Stack>
      </AppBar>
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        sx={{
          fontFamily: "Poppins",
          fontWeight: "bold",
          ".MuiDrawer-paper": {
            boxSizing: "border-box",
            width: 150,
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#E3222A",
            padding: "20px",
          },
        }}
      >
        {list()}
      </Drawer>
    </Box>
  );
};

export default Navbar;
