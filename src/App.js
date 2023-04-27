import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Header from "./pages/Header";
import Team from "./pages/Team";
import FAQ from "./pages/FAQ"
import Footer from "./pages/Footer";
import ChatbotPage from "./chatbot/ChatbotPage";
import Login from "./pages/Login"

function App() {
  return (
    <div className="App">
      <div className="content">
        <Header />
        <div className='container'>
          <Routes>
            <Route path='/chatbot' element={<ChatbotPage />}/>
            <Route path='/Team' element={<Team />}/>
            <Route path='/faq' element={<FAQ />}/>
            <Route path='/login' element={<Login />}/>
          </Routes>
        </div>
        <Footer></Footer>
      </div>
		</div>
  );
}

export default App;
