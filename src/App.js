import './App.css';
import image from './coffee.png';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Coffee from './Coffee';
import About from './About';
import Contact from './Contact';



function App() {

  return (
    <div>
      <div className='mocchaberry'>
      <img className='cof' src={image} width="150px" height="150px" alt='coffee'/>
        <div className='moccha cs'>
        <h1>Mocchaberry</h1>
        <div className='cs'>
        <p className='shop'>coffee shop</p>
        </div>
        </div>
      </div>
      <Router>
      <nav>
   <Link to = "/" className='link'>Coffee</Link>
   <Link to = "/about" className='link'>About us</Link>
   <Link to = "/contact" className='link'>Contact</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Coffee />}/>
         <Route path="/about" element={<About />}/>
         <Route path="/contact" element={<Contact />}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
