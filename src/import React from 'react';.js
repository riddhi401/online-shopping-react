import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import  ProductContext from "./Global/ProductContext";
import CartContext from "./Global/CartContext"
import Product from "./components/Product";
import Cart from "./components/Cart";
import NotFound from "./components/NotFound"


const App = () =>{
  return(
    <div>
 <ProductContext>
   <CartContext>
          <Navbar/>
          <BrowserRouter>
            <Switch>
              <Route path="/" exact component={Product}/>
              <Route path="/cart" exact component={Cart}/>
              <Route  component={NotFound}/>
            </Switch>
          </BrowserRouter>
          </CartContext>
      </ProductContext>
    </div>
  )
}


export default App;


