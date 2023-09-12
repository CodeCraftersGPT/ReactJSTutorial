import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './components/Routing/Home';
import About from './components/Routing/About';
import NavBar from './components/Routing/NavBar';


function App() {
  return (
    <div className="App" >
      <NavBar></NavBar>
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} /> 
      </Routes>
     
    </div>
   
  );
}

export default App;
