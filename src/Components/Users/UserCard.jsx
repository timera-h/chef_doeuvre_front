import React from 'react';




export default function UserCard({infos}) {
    return (
        <li className="user card">
        <h3 className="title">Utilisateur : {infos.lastName} - {infos.firstName}</h3>
  
    <section className="commande-user">
    <h3 className="title">Commandes de {Boolean(infos.gender) === "Male" ? `Mr ${infos.lastName}` : `Mme ${infos.lastName}` }</h3>
<article className="product-user" >{infos.products.map((product, i ) =>  (
    
    <h4 className="title" key={i}>{product.name}</h4>
    
) ) }</article>
</section>
<hr/>
        </li>
    )
}
