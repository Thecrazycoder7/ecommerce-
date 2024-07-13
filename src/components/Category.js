import React, { useState, useContext } from "react";
import electronic from "../assets/categoryImg/electronic.jpg";
import jewelry from "../assets/categoryImg/jewelry.jpg";
import mens from "../assets/categoryImg/mens.jpg";
import women from "../assets/categoryImg/women.jpg";
import item from "../assets/categoryImg/item.jpg";
import "./Category.css";
import { Divider } from "@mui/material";
import { ProductContext } from "../context/ProductContext";

const Category = () => {
  const { handleCategoryClick, selectedCategory } = useContext(ProductContext);

  const ListImg = {
    products: item,
    electronics: electronic,
    jewelery: jewelry,
    mens: mens,
    womens: women,
  };

  const categories = Object.keys(ListImg);

  

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
  
    </div>
  );
};

export default Category;
