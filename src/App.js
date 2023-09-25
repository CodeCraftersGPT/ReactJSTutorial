import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './components/Routing/Home';
import About from './components/Routing/About';
import NavBar from './components/Routing/NavBar';
import Order from './components/Routing/Order';
import Test from './components/Test';


function App() {
  return (
    <div className="App" >
      <Test/>
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
