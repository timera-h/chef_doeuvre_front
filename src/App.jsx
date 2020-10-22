import React from 'react';
import { Switch, Route} from "react-router-dom";

import { ProtectedRoute } from "./Components/auth/ProtectedRoute";
import { ProtectedRouteAdmin } from "./Components/auth/ProtectedRouteAdmin";

// layout
import HeaderMain from "./Components/Layout/HeaderMain";
import FooterMain from "./Components/Layout/Footer";

// views
import Home from "./Components/Page/Home";
import OurProducts from "./Components/Page/OurProducts";
import Contact from "./Components/Page/Contact";
import Product from "./Components/Page/Product";
import Profile from "./Components/Page/Profile";
import Users from "./Components/Page/Users";
import Signup from "./Components/Page/Signup";
import Signin from "./Components/Page/Signin";
import Favorites from "./Components/Page/Favorites";
import Dashboard from "./Components/Page/Dashboard";
import BasketShop from "./Components/Page/BasketShop";
import Favorite from "./Components/Page/Favorite";
import Payement from "./Components/Page/Payement";
import NotFound from "./Components/Page/NotFound";
import CreateProduct from './Components/Products/CreateProduct';
import DeleteProduct from "./Components/Products/DeleteProduct";
import UpdateProduct from "./Components/Products/UpdateProduct";
import FormUpdateProduct from "./Components/Products/FormUpdateProduct";
import CreateCategory from './Components/Categories/CreateCategory';
import DeleteCategory from "./Components/Categories/DeleteCategory";
import AuthContext from "./Components/auth/AuthContext";


// style
import "./styles/main.css";
import './styles/App.css';


class App extends React.Component {
  static contextType = AuthContext;
  render(){
    // const currentUser = this.context.currentUser;
  return (
    <div className="App">
      <HeaderMain />
      <main>
       <Switch>
        {/* A <Switch> looks through its children <Route>s and renders the first one that matches the current URL. */}
        <Route exact path="/" component={Home} />
        <Route exact path="/our-products" component={OurProducts} />
        <Route exact path="/our-products/:cat" component={OurProducts} />
        <Route path="/contact" component={Contact} />
        <Route path="/signup" component={Signup} />
        <Route path="/signin" component={Signin} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/product/:id" component={Product} />
        <ProtectedRoute path="/profile/:id" component={Profile} />
        <Route path="/delete/product" component={DeleteProduct} />
        <Route path="/delete/category" component={DeleteCategory} />
        <Route path="/update/product" component={UpdateProduct} />
        <Route path="/update/product/:id" component={FormUpdateProduct}/>
        <Route path="/users" component={Users}/>
        <Route path="/create-product" component={CreateProduct} />
        <Route path="/create-category" component={CreateCategory} />
        <ProtectedRouteAdmin path="/dashboard" component={Dashboard} />
        <Route path="/basketShop" component={BasketShop} />
        <Route path="/favorites" component={Favorite} />
        <Route path="/payement" component={Payement} />
        <Route path="*" component={NotFound} />
      </Switch>
      </main>

      <FooterMain />
    </div>
  );
}
}

export default App;
