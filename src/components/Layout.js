import React from "react";
import Home from "./Home";
import { Container } from "@mui/material";
import Category from "./Category";

const Layout = () => {
  return (
      <Container className="banner-container">
        <Home />
        <Category />
      </Container>
  );
};

export default Layout;
