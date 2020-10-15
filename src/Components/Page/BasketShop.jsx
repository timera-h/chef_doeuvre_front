import React, { Component } from 'react';
// import { APIHandler } from "./../../api/handler";
import CartContext from "./../CartContext/CartContext";
import Paypal from "./../Content/Paypal";
// const apiHandler = new APIHandler("/api/users");


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
   await this.context.getTotal()
   await this.context.getCart()
}




    render() {
        const cart = this.context.cart;
        const reduce = this.context.reduce;
        const increment = this.context.increment;
        const total = this.context.total;
        const removeProduct = this.context.removeProduct;

        const successTransaction = async () => {
            // const user = apiHandler.post()
        }

        const transactionError = () => {
            console.log("Erreur de Paypal");
        }

        const canceledTransaction = () => {
            console.log("Transaction anulé");
        }

        if(cart.length === 0){
           return <h2 className="title">Votre panier est vide</h2>
        } else { 

            return (
                <div>
                    <ul>
                    {
                        cart.map((product, i) => ( 
                            
                            <li key={i}>
                                <img src={product.image} alt=""/>    
                        <span> { product.price * product.count}€</span>
                        <div className="quantity">
                            <button className="count" onClick={() => reduce(product._id)}> - </button>
                        <span>{ product.count}</span>
                            <button className="count" onClick={() => increment(product._id)}> + </button>
         
                        </div>
                        <div className="remove">
                        <button onClick={() => removeProduct(product._id)}>X</button>
                        </div>
                            </li>
                        ))
                    }</ul>
                    <div className="total">
                     <h3>Total: {total}€</h3>
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
           
                 )
             }
        }

        // console.log("mon contexte !!!", this.context.cart);
        // const {products} = this.state;
      
}
