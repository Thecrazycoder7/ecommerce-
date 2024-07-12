import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./ProductCard.css";
import { ProductContext } from "../context/ProductContext";

const ProductCard = ({ selectedCategory }) => {
  const { products, addToCart } = useContext(ProductContext);
  const navigate = useNavigate();

  // Filter products based on selectedCategory
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  const handleCardClick = (id) => {
    navigate(`/product/${id}`);
  };

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
              <br />
              <button
                className="btn_view"
                onClick={() => handleCardClick(product.id)}
              >
                View Detail
              </button>
              <button className="btn" onClick={() => addToCart(product.id)}>
                Add
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default ProductCard;
