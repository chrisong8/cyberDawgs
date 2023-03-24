import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Header from "./pages/Header";
import Team from "./pages/Team";
import FAQ from "./pages/FAQ"
import Significance from './pages/Significance';
import ChatbotPage from "./chatbot/ChatbotPage"

function App() {
  return (
    <div className="App">
      <div className="content">
        <Header></Header>
        <ChatbotPage></ChatbotPage>
        <Router></Router>
          {/* <Link to="/chatbot">Home</Link>
          <Link to="/significance">About us</Link>
          <Route path='/significance' element={Significance}/>
          <Route path='/chatbot' element={ChatbotPage}/>
          <Route path='/team' element={Team}/>
          <Route path='/faq' element={FAQ}/> */}
      </div>
		</div>
  );
}

export default App;
