import React, { useState, useEffect } from "react";
import shop from "../assets/shop.jpg";
import discount from "../assets/discount.jpg";
import delivery from "../assets/delivery.jpg";
import "./Home.css";

const Home = () => {
  const banner = [shop, discount, delivery];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % banner.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [banner.length]);

  return (
    <>
      
        <div className="banner">
          <img src={banner[currentIndex]} alt={`Banner ${currentIndex + 1}`} />
        </div>
        <div className="indicators">
          {banner.map((_, index) => (
            <span
              key={index}
              className={`indicator ${index === currentIndex ? "active" : ""}`}
            ></span>
          ))}
        </div>
    </>
  );
};

export default Home;
