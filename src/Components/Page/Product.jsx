import React, { Component } from "react";
import { APIHandler } from "./../../api/handler";
// import { Link } from "react-router-dom";
import "./../../styles/product.css";
import CartContext from "./../CartContext/CartContext";
import BtnAddToCart from "./../Content/BtnAddToCart";

// l'url des products
const apiHandler = new APIHandler("/api/products");
// const Handler = new APIHandler("/api/categories");

export default class Product extends Component {
  state = {
    product: "",
    category: "",
  };

  static contextType = CartContext;
  

  // au mount du component, on utilise le handler d'api pour récupérer un produit par son id
  async componentDidMount() {
    console.log(this.props); // le component Product a été servi par une <Route /> : donc les infos utiles de l'URL sont accessibles dans this.props, automatiquement
    // const apiResponse = await Handler.getAll();
    const apiRes = await apiHandler.getById(this.props.match.params.id);
    this.setState({ product: apiRes.data });

    // if(apiRes.data.category === apiResponse.data._id){

    //     this.setState({category : apiResponse.data})
    // }
  }
  render() {
    const { product } = this.state;
    // const { category } = this.state;
    return (
      <div>
        <h1 className="title">{product.name}</h1>
        {Boolean(this.state.product) === false ? (
          <div className="rechargement">Rechagement ....</div>
        ) : (
          <section className="product-infos">
            <article className="flex-product-infos">
              <figure className="img-product-infos">
                <img src={product.image} alt={product.ref} />
              </figure>
            </article>
            <article className="product-infos-card">
              <h2 className="title">
                <span title={product.ref}>{product.name}</span>
              </h2>
              <p className="product-propriete">{product.propriete}</p>
              <div className="flex-quantity">
                <select name="quantity" id="product-quantity">
                  <option value="un">1</option>
                  <option value="deux">2</option>
                  <option value="trois">3</option>
                  <option value="quatre">4</option>
                  <option value="cinq">5</option>
                  <option value="six">6</option>
                  <option value="sept">7</option>
                  <option value="huit">8</option>
                  <option value="neuf">9</option>
                </select>
                <div>
                  <p className="prix">
                    {product.price}
                    <span>€</span>
                  </p>
                <BtnAddToCart infos={product} />
                   
                </div>
              </div>
            </article>
          </section>
        )}
      </div>
    );
  }
}
