import logo from './logo.svg';
import './App.css';
import SimpleGreet from './components/1_SimpleGreet';
import ClassGreet from './components/3_ClassGreet';


function App() {
  return (
   <div>
    <SimpleGreet/>
    <ClassGreet name="Sachin" lastName="Tendulkar"/>

   </div>
   
  );
}

export default App;
