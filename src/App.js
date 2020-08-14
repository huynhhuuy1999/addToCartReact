// import module
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// import file
import Home from './pages/home/home';
import Product from './pages/products/product';
import TopMenu from './components/TopMenu/TopMenu';
import {ContextCart} from './context/contextCart';
import './App.css';

function App() {
  return (
    <ContextCart>
      <Router>
        <div>
          <TopMenu/>
          <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/product" component={Product}/> 
          </Switch>
        </div>
      </Router>
    </ContextCart>
  );
}

export default App;
