import logo from './logo.svg';
import './App.css';
import SimpleGreet from './components/1_SimpleGreet';
import ClassGreet from './components/3_ClassGreet';
import ParentComponent from './components/8_MethodAsProp';
import UserForm from './components/LiftingStateUp/WithoutLiftState/UserForm';
import UserFormLS from './components/LiftingStateUp/WithStateLift/UserformLS';



function App() {
  return (
   <div>
    {/* <SimpleGreet/>
    <ClassGreet name="Sachin" lastName="Tendulkar"/>
    <ParentComponent/> */}

    {/* <UserForm/> */}
    <UserFormLS/>



   </div>
   
  );
}

export default App;
