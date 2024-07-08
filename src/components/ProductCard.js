import React, { useContext } from "react";
import "./ProductCard.css";
import { ProductContext } from "../context/ProductContext";
import { Button } from "@mui/material";

const ProductCard = ({ selectedCategory }) => {
  const { products } = useContext(ProductContext);

  // Filter products based on selectedCategory
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div className="product_container">
      {filteredProducts.length === 0 ? (
        <p>No products found in this category.</p>
      ) : (
        filteredProducts.map((product) => (
          <div className="product_card" key={product.id}>
            <img
              src={product.image}
              alt={product.title}
              className="product_image"
            />
            <div className="product_detail">
              <p className="product_title">{product.title}</p>
              <h4 className="product_price">Price: ${product.price}</h4>
              <span className="product_rating">
                Rating: {product.rating.rate}
              </span>
              <Button>Add to cart</Button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductCard;
