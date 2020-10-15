import React, {Component} from "react";
import {Link} from "react-router-dom";
import {APIHandler} from "../../api/handler";
import UserCard from "./UserCard";

const userHandler = new APIHandler("/api/users");

export default class UserList extends Component {
  state = {
    users: [],
  };

  async componentDidMount() {
      console.log("par ici la propriété >>>>>" ,this.props);
    // si besoin d'intéragir avec des data du server-back, au chargement du component, on utilisera TOUJOURS le lifecycle componentDidMount
    // en bref : fait l'appel AJAX pour get tous les produits seulement une fois que le component ProductList a été accroché au DOM virtuel de React
    const apiRes = await userHandler.getAll(); // return une Promise
    this.setState({users : apiRes.data})
  }

  render() {
    const { users } = this.state;
    return (
      <div className="user-displayer">
          <h1 className="title">Manage Users</h1>
        <ul className="list users">
          {users.map((user, i) => (
            <Link className="link-user" key={i} to={`/profile/${user._id}`}>
              <UserCard key={i} infos={user} />
            </Link>
            
          ))}
        </ul>
      </div>
    );
  }
}
