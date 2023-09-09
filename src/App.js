import logo from './logo.svg';
import './App.css';

import Welcome from './components/Welcome';

import { Greet } from './components/Greet';

import HookCounter1 from './components/HookCounter1';

import User from './components/User';



function App() {
  return (
    <div className="App" >
      <User></User>
     {/* <Welcome name="kumar" age="21"/>
     <Welcome name="Keshav" age="31"/>
     <Welcome name="Shub" age="32"/>
     <Greet name="Narendhra" lastName="Modi"></Greet>
     <Greet name="Rahul" lastName="Gandhi"></Greet>
     <HookCounter1></HookCounter1> */}
    
    </div>
  );
}

export default App;
