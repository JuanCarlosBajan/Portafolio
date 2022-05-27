import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/Dashboard.js';
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
          <Route path="/" element={<Dashboard />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
