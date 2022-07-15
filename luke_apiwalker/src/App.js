import "./App.css";
import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Navigation from "./components/Navigation";
import Result from "./views/Result";
import Error from "./views/Error";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path=":resource/:id" element={<Result />} />
          <Route path="/404" element={<Error />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
