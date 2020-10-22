import React, { Component } from "react";
import "./../../styles/ourProducts.css";
import { Link } from "react-router-dom";
import ProductCard from "./../Products/ProductCard";
import ProductContext from "../Products/ProductContext";
import BtnAddToCart from "../Content/BtnAddToCart";

export default class OurProducts extends Component {
  static contextType = ProductContext;

  getUpdatedProducts = async () => {
    const { params } = await this.props.match;
    console.log("response", params);
    const cat = params.cat || "all";
    const formated = cat.replace("-", " ");
    this.context.getProducts(formated);
  }

  async componentDidMount() {
   await this.getUpdatedProducts()
  }

  componentDidUpdate(prevProps) {
    console.log("trigger");
    if (this.props.location !== prevProps.location) {
      this.getUpdatedProducts()
    }
  }



  render() {
    const products = this.context.products;
    return (
    
        <div className="product-displayer">
          <ul className="list products">
            {products.map((product, i) => (
              <div className="product-card" key={i}>
                <Link key={i} to={`/product/${product._id}`}>
                  <ProductCard key={i} infos={product} />
                </Link>
                <BtnAddToCart infos={product} />
              </div>
            ))}
          </ul>
        </div>

    );
  }

}
