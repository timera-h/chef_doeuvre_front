import React, { useContext } from 'react';
import CartContext from "./../CartContext/CartContext";

export default function BtnAddToCart({infos}) {
    const CartContextValue = useContext(CartContext);
    
        return (
            <button
        className="add-product"
        onClick={() => CartContextValue.addToCart(infos)}
      >
        <span className="add-in-shop-cart">Ajouter au panier</span>
      </button>
        )
    }

