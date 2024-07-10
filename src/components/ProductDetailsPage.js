import React, { useContext } from 'react'
import { ProductContext } from '../context/ProductContext'
import { useParams } from 'react-router-dom'
import "./ProductDetailsPage.css";
import { Button, Container, Divider } from '@mui/material';
const ProductDetailsPage = () => {
    const {id} = useParams();
    const {products} = useContext(ProductContext)

    const product = products.find((item) => item.id === parseInt(id));

    if (!product) {
      return <div>Product not found</div>;
    }


  return (
    <Container>
      <div className="detail_page">
        <div className="image_display">
          <h1>{product.title}</h1>
          <img src={product.image} alt={product.title} />
        </div>
        <Divider />
        <div className="item_detail">
          <h2>Know more details of product</h2>
          <p>{product.description}</p>
          <p>Category: {product.category}</p>
          <span>Rating: {product.rating.rate}</span>
          <span>Reviews: {product.rating.count}</span>
          <h4>Price: ${product.price}</h4>
        <button className='btn'>Add to cart</button>
        </div>
      </div>
    </Container>
  );
}

export default ProductDetailsPage