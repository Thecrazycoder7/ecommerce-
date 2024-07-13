import React, { useContext } from "react";
import Home from "./Home";
import { Container } from "@mui/material";
import Category from "./Category";
import ProductCard from "./ProductCard";
import { ProductContext } from "../context/ProductContext";
const Layout = () => {
  const {selectedCategory} = useContext(ProductContext);

  return (
    <>
      <Container className="banner-container">
        <Home />
        <Category />
        <ProductCard selectedCategory={selectedCategory} />
      </Container>
    </>
  );
};

export default Layout;
