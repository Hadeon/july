import React from 'react';
import { Link } from 'react-router-dom'
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar-body">
      <ul>
        <Link to="/" className="sidebar-link">
          <li>Featured Items</li>
        </Link>
        <Link to="/merch/clothing" className="sidebar-link">
          <li>Clothing</li>
        </Link>
        <Link to="/merch/stickers" className="sidebar-link">
          <li>Stickers</li>
        </Link>
        <Link to="/about" className="sidebar-link">
          <li>About</li>
        </Link>
      </ul>
    </div>
  )
}

export default Sidebar;