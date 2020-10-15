import React, { Component } from "react";
import CartContext from "./CartContext";




export default class CartProvider extends Component {
  state = {
    cart: [],
    total: 0
  };

  addProductToCart = (product) => {
    const clone = [...this.state.cart];
    clone.push(product);
    this.setState({ cart: clone }, () => {
      localStorage.setItem("cart", JSON.stringify(this.state.cart))
    });
    console.log("push", clone);
  };

  getCart = () => {
    console.log("get item", localStorage.getItem("cart"));
    const item = localStorage.getItem("cart");
   return item;
  };

  

getTotal = () => {
  const {cart} = this.state;
  const res = cart.reduce((prev, product) => {
    return prev + (product.price * product.count)
  },0)
  this.setState({total: res})
}


  reduce = id => {
    const {cart} = this.state;
    cart.forEach(product => {
      if(product._id === id){
        product.count === 1 ? product.count = 1 : product.count -=1;
      }
    })
    this.setState({cart: cart});
    this.getTotal();
  }

  increment = id => {
    const {cart} = this.state;
    cart.forEach(product => {
      if(product._id === id){
        product.count +=1 
      }
    })
    this.setState({cart: cart});
    this.getTotal();
  }

  removeProduct = id => {
    if(window.confirm("Êtes vous sur de vouloir supprimé ce produit de votre panier?")) {
      const {cart} = this.state;
      cart.forEach((product, i) => {
        if(product._id === id) {
          cart.splice(i, 1)
        }
      })
      this.setState({cart: cart});
      this.getTotal();
    }
   
  };




  render() {
    const cartValues = {
      cart: this.state.cart,
      addToCart: this.addProductToCart,
      getCart: this.getCart,
      reduce: this.reduce,
      increment: this.increment,
      removeProduct: this.removeProduct,
      total: this.state.total,
      getTotal: this.getTotal
    };

    return (
      <CartContext.Provider value={cartValues}>
        {this.props.children}
      </CartContext.Provider>
    );
  }
}
