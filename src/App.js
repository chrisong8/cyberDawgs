import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, Link } from "react-router-dom";

import Header from "./pages/Header";
import Team from "./pages/Team";
import FAQ from "./pages/FAQ"
import Significance from './pages/Significance';
import Chatbot from "./chatbot/Chatbot"
// chatbot should include viz, bot, checklist

function App() {
  return (
    <div className="App">
      <Header></Header>

      <Chatbot></Chatbot>
      {/* onclick -> */}
      {/* <Team></Team> */}
			<Router>
					<Route exact path='/significance' component={Significance}/>
          <Route exact path='/chatbot' component={Chatbot}/>
          <Route exact path='/team' component={Team}/>
          <Route exact path='/faq' component={FAQ}/>
					<Route path='*' element={<Navigate to='/chatbot' />} />
			</Router>
		</div>
  );
}

export default App;
