import './App.css';
import {useState} from 'react';
import Navbar from './components/Navbar'; 
import {Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';


function App() {

  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <Navbar open={open} setOpen={setOpen}/>
      <Routes>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<SignUp />}/>
      </Routes>
    </div>
  );
}

export default App;
