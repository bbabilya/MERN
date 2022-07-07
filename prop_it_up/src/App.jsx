import logo from './logo.svg';
import './App.css';
import React from 'react';
import User from './components/ClassComponent';
// initialize import of model from ClassComponent.jsx
// this file is closest to a python model.

function App() {
  return (
    <div className="App">
      {/* create an instance of "user" with all fields you want. */}
      <User first_name = {"Jane"} last_name = {"Doe"} age = {29} hair_color = {"Pink"} pronoun = {"her"} />
      <User first_name = {"John"} last_name = {"Doe"} age = {33} hair_color = {"Black"} pronoun = {"his"} />
      <User first_name = {"Kaija"} last_name = {"Pendergast"} age = {20} hair_color = {"Red"} pronoun={"their"} />
    </div>
  );
}

export default App;
