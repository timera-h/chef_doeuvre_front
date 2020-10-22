import React, { Component } from "react";
// import { APIHandler } from "./../../api/handler";
import CartContext from "./../CartContext/CartContext";
import Paypal from "./../Content/Paypal";
import CartEmpty from "./../../Assets/img/panier_vide.png";
import "./../../styles/cart.css";
import BtnValidateCart from "../Content/BtnValidateCart";
import Axios from "axios";
// import { Link } from "react-router-dom";

// const apiHandler = new APIHandler("/api/users");

export default class BasketShop extends Component {
  static contextType = CartContext;

  async componentDidMount() {
    // const user = apiHandler.getById()
    await this.context.getTotal();
    this.context.getCart(this.context.cart);
  }

  render() {
    const cart = this.context.cart;
    const reduce = this.context.reduce;
    const increment = this.context.increment;
    const total = this.context.total;
    const removeProduct = this.context.removeProduct;

    const successTransaction = async (data) => {
      const variables = {
        // detailCart: user.detailCart,
        dataPayement: data,
        // paid: true,
        // cancelled: false,
        // payerID: "25DHYSPYY75F8",
        // paymentID: "PAYID-L6IWBCY9KK48592FE8250724",
        // paymentToken: "EC-5Y833262G6005840D",
        // returnUrl:
        //   "https://www.paypal.com/checkoutnow/error?paymentId=PAYID-L6IWBCY9KK48592FE8250724&token=EC-5Y833262G6005840D&PayerID=25DHYSPYY75F8",
        // address: {
        //   city: "Paris",
        //   country_code: "FR",
        //   line1: "Av. de la Pelouse",
        //   postal_code: "75002",
        //   recipient_name: "John Doe",
        //   state: "Alsace",
        // },
      };
      Axios.post("/api/users/successBuy", variables)
      // .then(res => {
      //   if(res.){

      //   } else {

      //   }
      // })
    };

    const transactionError = () => {
      console.log("Erreur Paypal");
    };

    const canceledTransaction = () => {
      console.log("Transaction anulé");
    };

    return (
      <div>
       
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
                    <button onClick={() => removeProduct(product._id)}>
                      X
                    </button>
                  </div>
            
                  {cart.length === 0 ? <img src={CartEmpty} alt="" /> : ""}
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
      </div>
    );
  }
}
