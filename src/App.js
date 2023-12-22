import logo from './logo.svg';
import './App.css';
import NameCounter from './components/useEffect/33_useEffect_NameCounter';
// import registration form
import RegistrationForm from './components/23_RegistrationForm';
import ParentComponent from './components/useCallBackAndMemo/ParentComponent';




function App() {
  return (
   <div>
      <ParentComponent/>
   {/* <RegistrationForm/> */}
   </div>
   
  );
}

export default App;
