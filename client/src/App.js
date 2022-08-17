import './App.css';
import Navbar from './components/Navbar'; 
import {Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<SignUp />}/>
      </Routes>
    </div>
  );
}

export default App;
