import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import Header from "./pages/Header";
import Home from "./pages/Home"
import Data from "./pages/Data";
import About from "./pages/About";
import Chatbot from "./chatbot/Chatbot"

function App() {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/data" component={Data} />
          <Chatbot />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
