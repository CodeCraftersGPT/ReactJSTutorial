import logo from './logo.svg';
import './App.css';
import SimpleGreet from './components/1_SimpleGreet';
import ClassGreet from './components/3_ClassGreet';
import ParentComponent from './components/8_MethodAsProp';

import PostsComponent from './components/fetchandaxios/26_axios_async';
import NameCounter from './components/useEffect/33_useEffect_NameCounter';
import ThemeContext from './components/useContextExample/ThemedContext/ThemeContext';
import DashboardComponent from './components/useContextExample/ThemedContext/DashBoardComponent';




function App() {

  const theme = 'dark';
  return (
   <div>
     <ThemeContext.Provider value={theme}>
      <DashboardComponent />
    </ThemeContext.Provider>
   </div>
   
  );
}

export default App;
