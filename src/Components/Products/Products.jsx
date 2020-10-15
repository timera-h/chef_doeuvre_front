import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProductCard from "./ProductCard";
import ProductContext from "./ProductContext";
import { withRouter } from "react-router";


class Products extends Component {
  static contextType = ProductContext;

  render() {
    const products = this.context.products;

    return (
      <div>
        <div className="container-products-search">
          <ul className="list-products-search">
            {products.map((product, i) => (
              <div className="product-search" key={i}>
                <Link key={i} to={`/product/${product._id}`}>
                  <ProductCard key={i} infos={product} />
                </Link>
              </div>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
export default withRouter(Products)
