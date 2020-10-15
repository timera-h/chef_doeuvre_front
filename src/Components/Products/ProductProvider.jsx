import React, { Component } from "react";
import ProductContext from "./ProductContext";
import { APIHandler } from "../../api/handler";

const productHandler = new APIHandler("/api/products");


export default class ProductProvider extends Component {
  state = {
    products: [],
  };

  getProducts = async (cat) => {
    try {
      const apiRes = await productHandler.getAll(cat);
      console.log("dddd", productHandler.getAll());
      this.setState({ products: apiRes.data });
    } catch (apiErr) {
      console.error(apiErr.message);
    }
  };

  getOneProduct = async () => {
    const apiRes = await productHandler.getById(this.props.match.params.id);
    console.log("couuuuuu !");
    this.setState({products : apiRes.data});
  }

  updateProduct = async (evt) => {
    const apiRes = await productHandler.updateOne(this.state._id, this.state)
    console.log(apiRes);
  }
  

  deleteProduct = async (id) => {
    if(window.confirm("Êtes-vous sûre de vouloir supprimé ce produit ?")){
      await productHandler.deleteOne(id);
      const apiRes2 = await productHandler.getAll();
this.setState({products: apiRes2.data})
    }
  }

  render() {
    const values = {
      products: this.state.products,
      getProducts: this.getProducts,
      getOneProduct: this.getOneProduct,
      updateProduct: this.updateProduct,
      deleteProduct: this.deleteProduct
    };
    return (
      <ProductContext.Provider value={values}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}
