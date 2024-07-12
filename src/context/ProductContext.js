import React, { useState, useEffect, createContext } from 'react'

export const ProductContext = createContext();

const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState({});

    const fetchProducts = async () => {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.warn(error);
      }
    };

    // const addToCart = (itemId) => {
    //   if(!cartItems[itemId]){
    //     setCartItems((prev) => ({...prev,[itemId]:1 }))
    //   }
    //   else{
    //     setCartItems((prev) => ({ ...prev, [itemId]:prev[itemId]+1 }));
    //   }
    // }

    const addToCart = (itemId) => {
      setCartItems((prev) => ({
        ...prev,
        [itemId]: (prev[itemId] || 0) + 1,
      }));
    };

    const removeFromCart = (itemId) => {
      setCartItems((prev) => {
        const newCartItems = { ...prev };
        if (newCartItems[itemId] > 1) {
          newCartItems[itemId] -= 1;
        } else {
          delete newCartItems[itemId];
        }
        return newCartItems;
      });
    };

    // const removeFromCart = (itemId) => {
    //   setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    // }

    useEffect(() => {
      fetchProducts();
    }, []);


  return (
    <ProductContext.Provider value = {{products, cartItems, setCartItems, addToCart, removeFromCart}}>
        {children}
    </ProductContext.Provider>
  )
}

export default ProductProvider