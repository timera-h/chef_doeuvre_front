import React, { Component } from "react";
import { Link } from "react-router-dom";
import ProductContext from "../Products/ProductContext";


export default class ProductList extends Component {

  static contextType = ProductContext;

  async componentDidMount(){
    await this.context.getProducts();
  }


  render() {
    const products = this.context.products.filter((product) => product.productMoment === true).slice(0,5);
    return (
      <div className="product-displayer">
      <ul className="list-products-moment">
        {products.map((product, i) => (
            <Link key={i} to={`/product/${product._id}`}>
          <li className="link-product-moment" key={i}>
          <div >
              <img src={product.image} alt="" />
        <p>{product.price}</p>
            <hr/>
        <p>{product.name}</p>
            </div>
            </li>
            </Link>
        ))}
      </ul>
    </div>

    );
  }
}
