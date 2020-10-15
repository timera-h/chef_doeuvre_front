import React, { Component } from 'react';
import { APIHandler } from "./../../api/handler";
// import { Link } from "react-router-dom";

const apiHandler = new APIHandler("/api/users");

export default class Profile extends Component {
    state = {
        user : "",
    };

    async componentDidMount(){
        const apiRes = await apiHandler.getById(this.props.match.params.id);
        this.setState({ user : apiRes.data });
    }
    render() {
        const { user } = this.state;
        return (
            <div>
               <h1 className="title">Bienvenue { this.state.user.gender === "Female" ? `Mme ${user.lastName} - ${user.firstName}` :  `Mr ${user.lastName} - ${user.firstName}`}</h1> 
               {Boolean(this.state.user) === false ? (
                   <div className="rechargement">Rechargement ....</div>
               ) : (
                   <section className="user-infos">
                       <article className="flex-user-infos">
                           <h2 className="title">Mes commandes</h2>
                           
                       </article>
                   </section>
               )}
            </div>
        )
    }
}
