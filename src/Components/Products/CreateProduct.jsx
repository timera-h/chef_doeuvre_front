import React, { Component } from "react";
import { APIHandler } from "./../../api/handler";

const apiHandler = new APIHandler("/api/products");
const apiCatHandler = new APIHandler("/api/categories");

export default class CreateProduct extends Component {
  state = {
    name: "savon",
    price: 15,
    stock: 20,
    ref: "dlpe-savon-20",
    propriete: "le savon blablabla ...",
    productMoment: true,
    categories: [],
    category: null,
    sold: -1
  };


  fileInput = React.createRef(); // on créé une référence ici, utilisée sur le l'input file plus bas

  async componentDidMount() {
    try {
      const res = await apiCatHandler.getAll();
      this.setState({ categories: res.data }, () => {
        console.log("yoyoyo");
        this.setState({ category: this.state.categories[0]._id });
      });
    } catch(err) {
      console.error(err);
    }

  }

  handleChange = (evt) => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    const {
      name,
      price,
      stock,
      ref,
      propriete,
      productMoment,
      category,
      sold,
    } = this.state; // destructuration de l'objet this.state
    const image = this.fileInput.current.files[0]; // on récupère la valeur de l'input file référencé
    const fd = new FormData(); // formData est obligatoire pour envoyer des files (ex: avatar) vers le backend
    // check la doc : https://developer.mozilla.org/fr/docs/Web/API/FormData

    fd.append("name", name);
    fd.append("price", price); // on ajoute des,
    fd.append("stock", stock); // clé / valeurs,
    fd.append("ref", ref); // dans l'objet ...
    fd.append("propriete", propriete); // fd :D
    fd.append("productMoment", productMoment);
    fd.append("category", category);
    fd.append("sold", sold);

    if (image) fd.append("image", image);
    // avant de passer l'objet formData (fd) à components/auth/AuthProvider
    // la ligne déclarée plus haut (static contextType) est accessible via this.context
    const apiRes = await apiHandler.createOne(fd);
    this.props.history.push("/dashboard");
    console.log(apiRes);
  };

  render() {
    return (
      <form
        className="form-create-product"
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
      >
        <h1 className="title">Créer un nouveau produit</h1>
        <div className="container-create-product">
          {/* (label.label+input.input)*5 */}
          <div className="label-input-container">
            <label htmlFor="" className="label-create">
              Nom
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="input"
              defaultValue={this.state.name}
            />
          </div>
          <div className="label-input-container">
            <label htmlFor="" className="label-create">
              Prix
            </label>
            <input
              type="number"
              id="price"
              name="price"
              className="input"
              defaultValue={this.state.price}
            />
          </div>
          <div className="label-input-container">
            <label htmlFor="" className="label-create">
              Stock
            </label>
            <input
              type="number"
              id="stock"
              name="stock"
              className="input"
              defaultValue={this.state.stock}
            />
          </div>
          <div className="label-input-container">
            <label htmlFor="" className="label-create">
              Ref
            </label>
            <input
              type="text"
              id="ref"
              name="ref"
              className="input"
              defaultValue={this.state.ref}
            />
          </div>
          <div className="label-input-container">
            <label htmlFor="" className="label-create">
              Propriété
            </label>
            <input
              type="text"
              id="propriete"
              name="propriete"
              className="input"
              defaultValue={this.state.propriete}
            />
          </div>
          <div className="label-input-container">
            <label htmlFor="" className="label-create">
              Soldé 
            </label>
            <input
              type="number"
              min="-1"
              max="100"
              id="sold"
              name="sold"
              className="input"
              defaultValue={this.state.sold}
            />
          </div>
          <div className="label-input-container">
            <label htmlFor="" className="label-create">
              Image
            </label>
            <input
              id="image"
              name="image"
              type="file"
              className="input"
              ref={this.fileInput}
            />
          </div>

          <label htmlFor="category" className="label-create">
            Categorie :
          </label>
          {Boolean(this.state.category) && (
            <select
              name="category"
              id="category"
              defaultValue={this.state.category._id}
            >
              {this.state.categories.map((cat, i) => (
                <option value={cat._id} key={i}>
                  {cat.name}
                </option>
              ))}
            </select>
          )}
          <div className="input-radio">
            <h4 className="title-gender">Est-ce un produit du moment ?</h4>
            <div className="input-true">
              <input
                type="radio"
                name="productMoment"
                value="true"
                defaultChecked={true}
              />
              <label htmlFor="gender">Oui</label>
            </div>
            <div className="input-false">
              <input
                type="radio"
                name="productMoment"
                value="false"
                />
              <label htmlFor="productMoment">Non</label>
            </div>
           
          </div>
          <button className="btn">Créer</button>
        </div>
      </form>
    );
  }
}
