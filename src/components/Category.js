import React, { useState, useContext } from "react";
import electronic from "../assets/categoryImg/electronic.jpg";
import jewelry from "../assets/categoryImg/jewelry.jpg";
import mens from "../assets/categoryImg/mens.jpg";
import women from "../assets/categoryImg/women.jpg";
import item from "../assets/categoryImg/item.jpg";
import "./Category.css";
import { Divider } from "@mui/material";
import { ProductContext } from "../context/ProductContext";
import ProductCard from "./ProductCard";

const Category = () => {
  const { products } = useContext(ProductContext);

  const ListImg = {
    products: item,
    electronics: electronic,
    jewelery: jewelry,
    "men's clothing": mens,
    "women's clothing": women,
  };

  const categories = Object.keys(ListImg);

  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category === "products" ? null : category);
  };

  return (
    <div className="category_container">
      <h2>Explore Our Product Category</h2>
      <p>Shop your favourite based on Category and Explore amazing offers!</p>
      <div className="category_list">
        {categories.map((category) => (
          <div
            className={`img_container ${
              selectedCategory === category ? "selected" : ""
            }`}
            key={category}
            onClick={() => handleCategoryClick(category)}
          >
            <img src={ListImg[category]} alt={category} />
            <p>{category}</p>
          </div>
        ))}
      </div>
      <Divider />

      {/* Pass selectedCategory as prop to ProductCard */}
      <ProductCard selectedCategory={selectedCategory} />
    </div>
  );
};

export default Category;
