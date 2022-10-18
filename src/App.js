import logo from './logo.svg';
import './App.css';
import SignIn from './components/Signin.tsx';
import Album from './components/Album.tsx';
function App() {
  return (
    <div className="App">
     <SignIn></SignIn>
     <Album></Album>
    </div>
  );
}

export default App;
