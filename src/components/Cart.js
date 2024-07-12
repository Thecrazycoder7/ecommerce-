import React, { useContext } from 'react';
import { ProductContext } from '../context/ProductContext';
import { Container, Divider } from '@mui/material';
import './Cart.css'

const Cart = () => {
  const { cartItems, products, removeFromCart } = useContext(ProductContext);
  const truncateTitle = (title) => {
    return title.length > 15 ? `${title.substring(0, 15)}...` : title;
  };
  return (
    <Container>
      <div className="cart">
        <h1>My Cart</h1>
        {products.map(
          (item) =>
            cartItems[item.id] > 0 && (
              <div className="cart_items" key={item.id}>
                <div className="cart_items_img">
                  <img src={item.image} alt={item.title} />
                </div>
                <p className="product_title">{truncateTitle(item.title)}</p>
                <p>{item.price}</p>
                <p>{cartItems[item.id]}</p>
                <p>{item.price * cartItems[item.id]}</p>
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    background: "brown",
                    padding: "5px 12px",
                    borderRadius: "50%",
                  }}
                  onClick={() => removeFromCart(item.id)}
                >
                  X
                </p>
              </div>
            )
        )}

        <div className="item_bill">
          <div>
           <h2>Choose shipping mode: </h2>
            <input type="radio" />
            <label>Store Pickup</label> <br />
            <input type="radio" />
            <label>Home Delivery</label>
          </div>
          <div>
            {/* Subtotal: <label>{item.price * cartItems[item.id]}</label> */}
            <button>Order</button>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Cart;