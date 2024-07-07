import React, { useState, useEffect } from "react";
import axios from "axios";
import electronic from "../assets/categoryImg/electronic.jpg";
import jewelry from "../assets/categoryImg/jewelry.jpg";
import mens from "../assets/categoryImg/mens.jpg";
import women from "../assets/categoryImg/women.jpg";

import './Category.css'
import { Divider } from "@mui/material";

const Category = () => {
  const ListImg = {
    electronics: electronic,
    jewelery: jewelry,
    "men's clothing": mens,
    "women's clothing": women,
  };

  const [categories, setCategories] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        "https://fakestoreapi.com/products/categories"
      );
      setCategories(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="category_container">
      <h2>Explore Our Product Category</h2>
      <p>Shop your favourite based on Category and Explore amazing offers!</p>
      <div className="category_list">
        {categories.map((category) => (
          <div className="img_container" key={category}>
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
