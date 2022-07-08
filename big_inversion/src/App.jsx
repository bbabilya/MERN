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
      <User firstName = "Jane" lastName = "Doe" age = {29} hairColor = {"Pink"} pronoun = "her" />
      <User firstName = {"John"} lastName = {"Doe"} age = {33} hairColor = {"Black"} pronoun = {"his"} />
      <User firstName = {"Kaija"} lastName = {"Pendergast"} age = {20} hairColor = {"Red"} pronoun={"their"} />
    </div>
  );
}

export default App;
