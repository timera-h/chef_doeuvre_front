import React, { Component } from "react";
// import { APIHandler } from "./../../api/handler";
import CartContext from "./../CartContext/CartContext";
import Paypal from "./../Content/Paypal";
import CartEmpty from "./../../Assets/img/panier_vide.png";
// const apiHandler = new APIHandler("/api/users");
import "./../../styles/cart.css";
import BtnValidateCart from "../Content/BtnValidateCart";

export default class BasketShop extends Component {
  // state = {
  //     products: []
  // }
  static contextType = CartContext;

  //   async componentDidMount() {
  //       const products = await apiHandler.getAll();
  //     this.setState({products: products.data})
  //   }

  async componentDidMount() {
    await this.context.getTotal();
    await this.context.getCart();
  }

  render() {
    const cart = this.context.cart;
    const reduce = this.context.reduce;
    const increment = this.context.increment;
    const total = this.context.total;
    const removeProduct = this.context.removeProduct;

    const successTransaction = async () => {
      // const user = apiHandler.post()
    };

    const transactionError = () => {
      console.log("Erreur de Paypal");
    };

    const canceledTransaction = () => {
      console.log("Transaction anulé");
    };
 
      return (
        <div>
            {
                cart.length === 0 ?  <figure className="cart_empty">
                <img src={CartEmpty} alt="" />
              </figure> :     
              <>   
               <ul className="list-cart">
            {cart.map((product, i) => (
              <li key={i} className="item-product">
                <img src={product.image} alt="" />
                <div className="product-descrption">
                  <h5>{product.name}</h5>
                  <p className="propriete-product">{product.propriete}</p>
                </div>
                <div className="quantity">
                  <button
                    className="btn-count"
                    onClick={() => reduce(product._id)}
                  >
                    {" "}
                    -{" "}
                  </button>
                  <span className="count">{product.count}</span>
                  <button
                    className="btn-count"
                    onClick={() => increment(product._id)}
                  >
                    {" "}
                    +{" "}
                  </button>
                </div>
                <span> {product.price * product.count}€</span>
                <div className="remove">
                  <button onClick={() => removeProduct(product._id)}>X</button>
                </div>
              </li>
            ))}
          </ul>
          <div className="total">
            <h3>Total: {total}€</h3>
          </div>
          <div className="valider-panier">
              <BtnValidateCart />
          </div>

          {/* paypal */}
          {/* créer 4 props pour les utiliser dans le component payement*/}
          <Paypal
            Apayer={total}
            OnSuccess={successTransaction}
            errorTransaction={transactionError}
            canceledTransaction={canceledTransaction}
          />
          </>
            } 
  
        </div>
      );
  }

  // console.log("mon contexte !!!", this.context.cart);
  // const {products} = this.state;
}
