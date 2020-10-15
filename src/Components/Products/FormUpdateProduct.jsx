import React, { Component } from "react";
import ProductContext from "./ProductContext";
import { APIHandler } from "./../../api/handler";
const apiCatHandler = new APIHandler("/api/categories");


export default class FormUpdateProduct extends Component {
  state = {
    category: [],
  };

  static contextType = ProductContext;

  async componentDidMount() {
    try {
      this.context.getOneProduct();
      const apiRes = await apiCatHandler.getAll();
      this.setState({category: apiRes.data})
    } catch(err){
      console.error(err)
    }
  
  }

  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    this.context.updateProduct(evt);
  };

  render() {
    const product = this.context.products;
    return (
      <>
        {product != null ? (
          <form
          className="form"
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
          >
            <label htmlFor="name" className="label-update-product">
              Nom
            </label>
            <input
              type="text"
              name="name"
              className="input-update"
              value={product.name}
            />
            <label htmlFor="price" className="label-update-product">
              Prix
            </label>
            <input
              type="number"
              name="price"
              className="input-update"
              value={product.price}
            />
            <label htmlFor="stock" className="label-update-product">
              Stock
            </label>
            <input
              type="number"
              name="stock"
              className="input-update"
              value={product.stock}
            />
            <label htmlFor="ref" className="label-update-product">
              Ref
            </label>
            <input
              type="text"
              name="ref"
              className="input-update"
              value={product.ref}
            />
            <label htmlFor="propriete" className="label-update-product">
              Propriété
            </label>
            <input
              type="text"
              id="propriete"
              name="propriete"
              className="input-update"
              value={product.propriete}
            />
            <label htmlFor="productMoment" className="label-update-product">
              Produit du Moment
            </label>
            <input
              type="text"
              name="productMoment"
              className="input-update"
              value={product.productMoment}
            />
            <label htmlFor="image" className="label-update-product">
              Image
            </label>
            <input
              type="file"
              name="image"
              className="input"
              value={product.image}
            />
            <button className="btn">Modifier</button>
          </form>
        ) : (
          ""
        )}
      </>
    );
  }
}
