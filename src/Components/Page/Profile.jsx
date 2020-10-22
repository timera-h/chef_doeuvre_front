import React, { Component } from "react";
import { apiHandler } from "./../../api/handlers";
// import { APIHandler } from "./../../api/handler";
import AuthContext from "./../auth/AuthContext";
import axios from "axios"
// import { Link } from "react-router-dom";

// const userHandler = new APIHandler("api/users");

const handler = apiHandler();

export default class Profile extends Component {

  static contextType = AuthContext;

  
  state = {
    
  };

  handleChange = (evt) =>
    this.setState({ [evt.target.name]: evt.target.value });

  updateUser = async (evt) => {
    evt.preventDefault();

    try {
      const apiRes = await handler.patch("/api/users/" + this.props.match.params.id, this.state);
      this.props.context.setCurrentUser(apiRes.data);
    } catch (apiErr) {
      console.error(apiErr);
    }
  };



  async componentDidMount() {
    console.log("current userrr") 
    const dbres = await axios.get(process.env.REACT_APP_BACKEND_URL + "/api/users/" + this.props.match.params.id)
    const user = dbres.data;
    const user2 = {
      gender: user.gender,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      tel: user.tel,
      address: user.address
    }
    this.setState(user2);
    console.log("current userrr", user.data) 
    // console.log(">>>>>>>>>>>>>set user >>>",  user);

    // if(this.context.currentUser != null)
    // {
    //   this.setState({currentUser: this.context.currentUser})
    // }
    
    const isSignedIn = this.context.isSignedIn;
    if (!isSignedIn) {
     this.isNotSignedIn();
    }
  }

  isNotSignedIn = () => {
    this.props.history.push("/signin");
  };

  render() {
    const user = this.state;
      return (
        <div>
          
          <h1 className="title">
            Bienvenue <span>
            {user.gender === "Female"
              ? `Mme ${user.lastName} - ${user.firstName}`
              : `Mr ${user.lastName} - ${user.firstName}`}</span>
          </h1>

          <section className="user-infos">
            <article className="flex-user-infos">
              <h2 className="title">Mes commandes</h2>
              {user.products}
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
          defaultValue={user.firstName}
        />
        <input
        //   className="input"
          type="text"
          name="lastName"
          defaultValue={user.lastName}
        />
        <input
        //   className="input"
          type="text"
          name="email"
          defaultValue={user.email}
        />
          <input
        //   className="input"
          type="password"
          name="password"
          
        />
            <input
        //   className="input"
          type="passwordConfirme"
          name="passwordConfirme"
          
        />
        <button className="btn">update infos</button>
      </form>
            </article>
          </section>
        </div>
      );
  }
}
