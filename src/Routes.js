import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Product from './Components/Product';
import ProductItem from './Components/ProductItem';
import PageNotFound from './Components/PageNotFound';
import NavBar from './Components/NavBar';


function Routes() {
  return (
    <div>
      <Router>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route exact path="/product" component={Product} />
            <Route path="/product/:id" component={ProductItem} />
            <Route path="*" component={PageNotFound} />
          </Switch>
      </Router>
    </div>
  );
} 

export default Routes;
