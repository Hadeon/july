import React from 'react';
import { Link } from 'react-router-dom'
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar-body">
      <ul>
        <li>
          <Link to="/" className="sidebar-link">A listed element</Link>
        </li>
        <li>
          <Link to="/" className="sidebar-link">A listed element</Link>
        </li>
        <li>
          <Link to="/" className="sidebar-link">A listed element</Link>
        </li>
        <li>
          <Link to="/" className="sidebar-link">A listed element</Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar;