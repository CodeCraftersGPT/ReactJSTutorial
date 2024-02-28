import logo from './logo.svg';
import './App.css';
import SimpleGreet from './components/1_SimpleGreet';
import ClassGreet from './components/3_ClassGreet';
import ParentComponent from './components/8_MethodAsProp';

import PostsComponent from './components/fetchandaxios/26_axios_async';
import NameCounter from './components/useEffect/33_useEffect_NameCounter';
import ThemeContext from './components/useContextExample/ThemedContext/ThemeContext';
import DashboardComponent from './components/useContextExample/ThemedContext/DashBoardComponent';
import UserContext from './components/useContextExample/ThemedContext/UserContext';
import MyComponentWithLogger from './components/HOC/MyComoponent';


function App() {

  const theme = 'dark';
  const name = 'Amit';

  return (
   <div className='App'>
    <MyComponentWithLogger message="Hello, World!" />
     {/* <ThemeContext.Provider value={theme}>
      <UserContext.Provider value={name}>
        <DashboardComponent />
    </UserContext.Provider>
    </ThemeContext.Provider> */}
   
   </div>
   
  );
}

export default App;
