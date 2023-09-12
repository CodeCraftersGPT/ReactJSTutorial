import logo from './logo.svg';
import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './components/Routing/Home';
import About from './components/Routing/About';
// import ThemeProvider, { ThemeProfile } from './components/useContextExample/UserProvider';
// // import UserProvider, { UserProfile } from './components/useContextExample/UserProvider';







function App() {
  return (
    <div className="App" >
      <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<About />} /> 
      </Routes>
      {/* <ThemeProvider>
      <div className="App">
        <h1>use Context Example</h1>
        <ThemeProfile />
      </div>
      </ThemeProvider> */}
     
    </div>
  );
}

export default App;
