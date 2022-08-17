import './App.css';
import {useState} from 'react';
import Navbar from './components/Navbar'; 
import {Routes, Route} from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Footer from './components/Footer';
import Banner from './components/Banner';
import './firebase/config.js';


function App() {

  const [open, setOpen] = useState(false);

  return (
    <div className="App">
      <Navbar open={open} setOpen={setOpen}/>
      <Routes>
          <Route path="/" element={<Banner />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/signup" element={<SignUp />}/>
          <Route path="/home" element={<Home />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
