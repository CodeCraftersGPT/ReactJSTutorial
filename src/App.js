import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './components/Routing/Home';
import About from './components/Routing/About';
import NavBar from './components/Routing/NavBar';
import Order from './components/Routing/Order';
import Test from './components/Test';
import { formToJSON } from 'axios';
import LifecycleExample from './components/Class/28_Class_LifeCycle.js';
import ShoppingCart from './components/useReducer/ShoppingCart';
import React from 'react';
import { Provider } from 'react-redux';
import store from './components/React-Redux/store';
import ProductList from './components/React-Redux/ProductList';
import Cart from './components/React-Redux/Cart';



function App() {
  return (
    <div className="App" >
<Provider store={store}>
<div className="App">
<ProductList />
<Cart />
</div>
</Provider>
      {/* <ShoppingCart/> */}
      {/* <LifecycleExample/> */}
      
      {/* <NavBar></NavBar>
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} /> 
         <Route path="/order" element={<Order />} /> 
      </Routes> */}
     
    </div>
   
  );
}

export default App;
