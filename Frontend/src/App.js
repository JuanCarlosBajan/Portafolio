import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard.js';
import Games from './Pages/Games.js';
import Apps from './Pages/Apps.js';
import Web from './Pages/Web.js';
import Me from './Pages/Me.js';
import SideBar from './Layouts/SideBar.jsx';
import './Assets/Styles/General.scss';

function App() {
  return (
    <div className="principal_div">
      <div className="side_bar_item">
        <SideBar />
      </div>
      <div className="content_item">
        <Routes>
          <Route exact path="/" element={<Dashboard />} />
          <Route path="/Games" element={<Games />} />
          <Route path="/Apps" element={<Apps />} />
          <Route path="/Web" element={<Web />} />
          <Route path="/Me" element={<Me />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
