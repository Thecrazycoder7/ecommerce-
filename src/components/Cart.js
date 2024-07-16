import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { Container, Divider } from "@mui/material";
import "./Cart.css";

const Cart = () => {
  const { cartItems, products, removeFromCart, getTotalAmount } =
    useContext(ProductContext);

  const truncateTitle = (title) => {
    return title.length > 15 ? `${title.substring(0, 15)}...` : title;
  };

  const deliveryCharge = 20;

  const isCartEmpty =
    Object.keys(cartItems).length === 0 ||
    Object.values(cartItems).every((count) => count === 0);

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
                <p>${item.price}</p>
                <p>{cartItems[item.id]}</p>
                <p>${item.price * cartItems[item.id]}</p>
                <p
                  style={{
                    fontSize: "20px",
                    fontWeight: "600",
                    background: "antiquewhite",
                    padding: "5px 12px",
                    borderRadius: "50%",
                    cursor: "pointer",
                  }}
                  onClick={() => removeFromCart(item.id)}
                >
                  X
                </p>
              </div>
            )
        )}

        <div className="item_bill">
          {isCartEmpty ? (
            <p>Your Cart is empty</p>
          ) : (
            <div>
              <p>
                Subtotal: <span>${getTotalAmount()}</span>{" "}
              </p>
              <p>
                Delivery: <span>${deliveryCharge}</span>{" "}
              </p>
              <p>
                Total: <span>${getTotalAmount() + deliveryCharge}</span>{" "}
              </p>
              <button className="btn">Order</button>
            </div>
          )}
        </div>
      </div>
    </Container>
  );
};

export default Cart;
