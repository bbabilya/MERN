import logo from './logo.svg';
import './App.css';
import React from 'react';
import User from './components/ClassComponent';
//initialize import of model from ClassComponent.jsx

function App() {
  return (
    <div className="App">
      <User first_name = {"Jane"} last_name = {"Doe"} age = {"29"} hair_color = {"Pink"} />
      <User first_name = {"John"} last_name = {"Doe"} age = {"33"} hair_color = {"Black"} />
      <User first_name = {"Kaija"} last_name = {"Pendergast"} age = {"20"} hair_color = {"Red"} />
    </div>
  );
}

export default App;
