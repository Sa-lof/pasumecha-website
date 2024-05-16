import React from "react";
import { Box } from "@mui/material";
import MainHeader from "../MainHeader/MainHeader";
import Menu from "../Menu/Menu";
import History from "../History/History";

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
    </Box>
  );
};

export default Main;
