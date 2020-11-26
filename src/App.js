import React, { useEffect, useState } from "react";
import { Switch, Route, Link, NavLink, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import Items from "./components/items"
import FetchData from "./components/FetchData";
import Navigation from "./components/Navigation";
import Cart from "./components/Cart"
import data from './data';



function App() {
	const [item] = useState(data);
	const [cart, setCart] = useState([]);

  useEffect(() => {
  }, []);

  
	const addItem = item => {
		// add the given item to the cart
		setCart([...cart, item]);
	
	};
  return (
    <div className="container">
      <Navigation cart={cart} />

    <Switch>
      <Route exact path ="/">
        <Items 
        item={item}
        addItem={addItem}/>
        </Route>
        <Route exact path ="/cart">
        <Cart />
        </Route>
      </Switch>
        </div>

  );
}
function mapStateToProps(state) {
  return {
    appState: state.appState,
    user: state.user
  };
}
export default connect(mapStateToProps)(App);