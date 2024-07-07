import React, { useState, useEffect } from 'react'
import './ProductCard.css'
import axios from "axios";

const ProductCard = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
      axios
        .get("https://api.example.com/data")
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);
  return (
    <>
        {
            data.map(item => (
                <div className="card_container" key={item.id}>
      <div className='image_container'>
        <img alt="" src={item.image} />
      </div>
      <div>
        <h2>Cream</h2>
      </div>
    </div>
            )   )
        }
    </>
  );
}

export default ProductCard