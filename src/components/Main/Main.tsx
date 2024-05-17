import React from "react";
import { Box } from "@mui/material";
import MainHeader from "../MainHeader/MainHeader";
import Menu from "../Menu/Menu";
import History from "../History/History";
import Gallery from "../Gallery/Gallery";
import Testimonies from "../Testimonies/Testimonies";
import Events from "../Events/Events";
import Contact from "../Contact/Contact";
import Footer from "../Footer/Footer";

const Main = () => {
  return (
    <Box
      sx={{
        marginLeft: "4.5rem",
        marginRight: "0.8rem",
        marginTop: "0.8rem",
        marginBottom: "0.8rem",
      }}
    >
      <MainHeader />
      <Menu />
      <History />
      <Gallery />
      <Testimonies />
      <Events />
      <Contact />
      <Footer />
    </Box>
  );
};

export default Main;
