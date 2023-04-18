import './App.css';
import React from 'react';
import { BrowserRouter as Router, Switch, Route, Routes, Link } from "react-router-dom";

import Header from "./pages/Header";
import Team from "./pages/Team";
import FAQ from "./pages/FAQ"
import Significance from './pages/Significance';
import Footer from "./pages/Footer";
import ChatbotPage from "./chatbot/ChatbotPage";

// TODO: add rendering appropriate page based on navigation/state (i.e. if click faq page, navigate)
// TODO: somehow render chatbot, viz, checklist on same page
function App() {
  return (
    <div className="App">
      <div className="content">
        <Header />
        <div className='container'>
          <Routes>
            <Route path='/chatbot' element={<ChatbotPage />}/>
            <Route path='/significance' element={<Significance />}/>
            <Route path='/Team' element={<Team />}/>
            <Route path='/faq' element={<FAQ />}/>
          </Routes>
        </div>
        <Footer></Footer>
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
