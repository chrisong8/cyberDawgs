import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Routes, Navigate, Link } from "react-router-dom";

// import Header from "./pages/Header";
import HomePage from "./pages/Home"
import TeamPage from "./pages/Team";
import FAQPage from "./pages/FAQ"
import SignificancePage from "./pages/Significance";
// import Chatbot from "./chatbot/Chatbot"

function App() {
  return (
    <div className="App">
			<BrowserRouter>
				<Routes>
					<Route path='/' element={
						<HomePage />
					} />
					<Route path='/Significance' element={
						<SignificancePage/>
					} />
          <Route path='/FAQ' element={
						<FAQPage/>
					} />
          <Route path='/Team' element={
						<TeamPage/>
					} />
					<Route path='*' element={<Navigate to='/' />} />
				</Routes>
			</BrowserRouter>
		</div>
    // <div className="App">
    //   <BrowserRouter>
    //     <div>
    //       <Header />
    //       <Route exact path="/" component={Home} />
    //       <Route exact path="/about" component={About} />
    //       <Route exact path="/data" component={Data} />
    //       <Chatbot />
    //     </div>
    //   </BrowserRouter>
    // </div>
  );
}

export default App;
