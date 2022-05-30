import React from 'react';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';

export default function Web() {
  return (
    <div className="dashboard_container">
      <Link className="return_button project_grid_container" to="/">
        <BiArrowBack size={20} color="aliceblue" />
      </Link>
      <div className="element_container"></div>
      <div className="element_container"></div>
      <div className="element_container"></div>
    </div>
  );
}
