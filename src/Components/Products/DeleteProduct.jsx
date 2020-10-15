import React, { Component } from "react";
import { APIHandler } from "./../../api/handler";
import ProductContext from "../Products/ProductContext";

const apiCatHandler = new APIHandler("/api/categories");

export default class DeleteProduct extends Component {
  state = {
    category: "",
    categories: [],
  };
  static contextType = ProductContext;

  async componentDidMount() {
    this.context.getProducts();
    const apiRes = await apiCatHandler.getAll();
    this.setState({ categories: apiRes.data }, () => {
      this.setState({ category: this.state.categories._id });
    });
  }

  handleDelete = async (id) => {
    this.context.deleteProduct(id);
  };

  render() {
    const products = this.context.products;
    return (
      <div>
        <h1 className="title">Supprimer un produit</h1>
        <table className="table">
            <thead>
              <tr>
                <th className="cell">image</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, i) => (
                <tr key={i}>
                  <td className="cell">
                    <img src={product.image} alt="product" />
                  </td>
                </tr>
              ))}
            </tbody>
            <thead>
              <tr>
                <th className="cell">Nom</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, i) => (
                <tr key={i}>
                  <td className="cell">{product.name}</td>
                </tr>
              ))}
            </tbody>
            <thead>
              <tr>
                <th className="cell">Prix</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, i) => (
                <tr key={i}>
                  <td className="cell">{product.price}</td>
                </tr>
              ))}
            </tbody>
            <thead>
              <tr>
                <th className="cell">Stock</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, i) => (
                <tr key={i}>
                  <td className="cell">{product.stock}</td>
                </tr>
              ))}
            </tbody>
            <thead>
              <tr>
                <th className="cell">Réference</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, i) => (
                <tr key={i}>
                  <td className="cell">{product.ref}</td>
                </tr>
              ))}
            </tbody>
            <thead>
              <tr>
                <th className="cell">Catégorie</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, i) => (
                <tr key={i}>
                  <td className="cell">{product.category.name}</td>
                </tr>
              ))}
            </tbody>
            <thead>
              <tr>
                <th className="cell">Supprimé</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, i) => (
                <tr key={i}>
                  <td className="cell">
                    <button onClick={() => this.handleDelete(product._id)}>
                      x
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
        </table>
      </div>
    );
  }
}
