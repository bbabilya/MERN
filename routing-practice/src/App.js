import './App.css';
import React from "react";
import {
  Routes,
  Route,
  Link 
} from "react-router-dom";
import Number from './components/Number';
import Hello from './components/Hello';
import Home from './components/Home';

//Routes exist inside the App function to declare, and wrap, around all of your necessary routes. 
// the 'main page' or '/' appears to need an exact path tag. I do not know why. 
function App() {
  return (
    <div>
      <p>
        <Link to="/home">Home</Link>
      </p>
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/:number" element={<Number />}/>
        <Route path="/hello" element={<Hello />}/>
        <Route path="/hello/:textColor" element={<Hello />}/>
        <Route path="/hello/:textColor/:backgroundColor" element={<Hello />}/>
      </Routes>
    </div>
  );
}
export default App
