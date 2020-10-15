import React, { Component } from "react";
import { Link } from "react-router-dom";
import { APIHandler } from "./../../api/handler";
import ProductFavorite from "./../Products/ProductFavorite";

// const productHandler = new APIHandler("/api/products");
const favoriteProductHandler = new APIHandler("/api/favorites");

export default class Favorites extends Component {
  state = {
    favorites: "",
    products: [],
  };
  async componentDidMount() {
    const apiRes = await favoriteProductHandler.getAll();
    this.setState({ favorites: apiRes.data });
  }

  render() {
    const { favorites } = this.state;

    return (
      <div>
        <ul className="list product">
          {
            <Link
              className="link-product"
            //   key={i}
              to="/"
            >
              <ProductFavorite infos={favorites} />
            </Link>
          }
        </ul>
      </div>
    );
  }
}
