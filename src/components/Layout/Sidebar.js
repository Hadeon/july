import React from 'react';
import { Link } from 'react-router-dom'
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar-body">
      <h2>Sidebar Header</h2>
      <ul>
        <Link to="/">A listed element</Link>
        <Link to="/login">Some more listed stuff</Link>
        <li>Maybe these are links</li>
        <li>Or could just be data</li>
        <li>Even buttons</li>
      </ul>
    </div>
  )
}

export default Sidebar;