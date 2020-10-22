import React, { Component } from "react";
import { apiHandler } from "./../../api/handlers";
import AuthContext from "./../auth/AuthContext";
// import { Link } from "react-router-dom";

const handler = apiHandler();

export default class Profile extends Component {
  state = {
    isEditMode: false,
    gender: "",
    firstName: "",
    lastName: "",
    email: "",
    tel: "",
    address: [
      {
        streetNumber: "",
        streetName: "",
        zipCode: "",
        city: "",
        country: "",
      },
    ],
  };

  static contextType = AuthContext;

  handleChange = (evt) =>
    this.setState({ [evt.target.name]: evt.target.value });

  updateUser = async (evt) => {
    evt.preventDefault();

    try {
      const apiRes = await handler.patch(
        "/api/users/" + this.props.context.currentUser._id,
        {
            gender: this.state.gender || this.props.context.currentUser.gender,
          firstName:
            this.state.firstName || this.props.context.currentUser.firstName,
          lastName:
            this.state.lastName || this.props.context.currentUser.lastName,
          email: this.state.email || this.props.context.currentUser.email,
          tel: this.state.tel || this.props.context.currentUser.tel,
        }
      );
      this.props.context.setCurrentUser(apiRes.data);
    } catch (apiErr) {
      console.error(apiErr);
    }
  };

  async componentDidMount() {
      console.log(">>>>>>>>>>>>>set user >>>", this.context.currentUser);
    const isSignedIn = this.context.isSignedIn;
    if (!isSignedIn) {
    await  this.isNotSignedIn();
    }
  }

  isNotSignedIn = () => {
    this.props.history.push("/signin");
  };

  render() {
    // const user = this.context.currentUser;
      return (
        <div>
          <h1 className="title">
            Bienvenue{" "}
            {/* {user.firstName} */}
            {/* {user.gender === "Female"
              ? `Mme ${user.lastName} - ${user.firstName}`
              : `Mr ${user.lastName} - ${user.firstName}`} */}
          </h1>

          <section className="user-infos">
            <article className="flex-user-infos">
              <h2 className="title">Mes commandes</h2>
              {/* {user.products} */}
              <form
        onChange={this.handleChange}
        onSubmit={this.updateUser}
        className="form"
      >
        <h3 className="title">My infos</h3>
        <input
        //   className="input"
          type="text"
          name="firstName"
          defaultValue={this.context.setCurrentUser.firstName}
        />
        <input
        //   className="input"
          type="text"
          name="lastName"
          defaultValue={this.context.setCurrentUser.lastName}
        />
        <input
        //   className="input"
          type="text"
          name="email"
          defaultValue={this.context.setCurrentUser.email}
        />
        <button className="btn">update infos</button>
      </form>
            </article>
          </section>
        </div>
      );
  }
}
