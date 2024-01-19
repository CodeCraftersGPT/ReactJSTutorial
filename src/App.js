import logo from './logo.svg';
import './App.css';
import SimpleGreet from './components/1_SimpleGreet';
import ClassGreet from './components/3_ClassGreet';
import ParentComponent from './components/8_MethodAsProp';

import PostsComponent from './components/fetchandaxios/26_axios_async';
import NameCounter from './components/useEffect/33_useEffect_NameCounter';
import DashboardComponent from './components/useContextExample/PropertyDrilling/DashBoardComponent';



function App() {

  const theme = 'dark';
  return (
   <div>
    <DashboardComponent theme={theme} />
   </div>
   
  );
}

export default App;
