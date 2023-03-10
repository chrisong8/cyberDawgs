import React from 'react';
import { BrowserRouter, Route, Routes, Navigate, Link } from "react-router-dom";

import HomePage from "./Home.js"
import TeamPage from "./Team.js";
import FAQPage from "./FAQ.js"
import SignificancePage from "./Significance.js";
// Home page with everything on it

const Home = () => {
    return (
			<div className='Home'>
          {/* viz
          chatbot
          checklist? */}
      </div>
    );
};
  
const handleMouseEvent = (event, {params}) => {
  event.currentTarget.style.backgroundColor = params.backgroundColor
  event.currentTarget.style.color = params.color
  event.currentTarget.style.cursor = params.cursor
  event.currentTarget.style.transition = '0.3s'
}

export default Home;