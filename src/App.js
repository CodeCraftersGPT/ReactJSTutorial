import logo from './logo.svg';
import './App.css';
import UserProvider, { UserProfile } from './components/useContextExample/UserProvider';





function App() {
  return (
    <div className="App" >
      <UserProvider>
      <div className="App">
        <h1>use Context Example</h1>
        <UserProfile />
      </div>
      </UserProvider>
    </div>
  );
}

export default App;
