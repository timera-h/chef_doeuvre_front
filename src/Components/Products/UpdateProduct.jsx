import React, { Component } from "react";
import { APIHandler } from "./../../api/_handler";
import { Link } from "react-router-dom";
import ProductContext from "../Products/ProductContext";
// import SearchProduct from "./../Filters/SearchProduct";


const apiCatHandler = new APIHandler("/api/categories");

export default class UpdateProduct extends Component {
  state = {
    category: [],
  }

  static contextType = ProductContext;

  async componentDidMount() {
    this.context.getProducts();
    const apiRes = await apiCatHandler.getAll();
    this.setState({category: apiRes.data})
  }

  render() {
    const products = this.context.products;
    return (
      <div>
        <h1 className="title">Modifier un produit</h1>
        {/* <div className="nav-top-search">
      <input
        //  onChange={this.handleInput}
        type="text"
        className="input-search active"
        placeholder="Rechercher un produit ..."
        onChange={this.handleSearch()}
        value={this.state.search}
      />
        </div>
        <button>Ok</button> */}
        <table className="table">
          <thead>
            <tr>
              <th className="cell">image</th>
              <th className="cell">id</th>
              <th className="cell">name</th>
              <th className="cell">price</th>
              <th className="cell">stock</th>
              <th className="cell">ref</th>
              <th className="cell">category</th>
              <th className="cell">product moment</th>
              <th className="cell">update</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product, i) => (
              <tr key={i}> 
                <td className="cell">
                  <img src={product.image} alt="product" />
                </td>
                <td className="cell">
                  {product._id}
                </td>
                <td className="cell">
                  {product.name}
                </td>
                <td className="cell">
                  {product.price}
                </td>
                <td className="cell">
                  {product.stock}
                </td>
                <td className="cell">
                  {product.ref}
                </td>
                <td className="cell">
                  {product.category.name}
                  {
                    console.log("!!!!", product.category.name)
                  }
                </td>
                <td className="cell">
                  {product.productMoment}
                </td>
                <td className="cell">
                    
                         <Link to={`/update/${product._id}`}>
                            modifier
                  </Link>
               
                 
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
