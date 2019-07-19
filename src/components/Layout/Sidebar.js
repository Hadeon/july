import React from 'react';
import { Link } from 'react-router-dom'
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar-body">
      <ul>
        <Link to="/" className="sidebar-link">Featured Items</Link>
        <li>
          <Link to="/merch/clothing" className="sidebar-link">Clothing</Link>
        </li>
        <li>
          <Link to="/merch/stickers" className="sidebar-link">Stickers</Link>
        </li>
        <li>
          <Link to="/about" className="sidebar-link">About</Link>
        </li>
      </ul>
    </div>
  )
}

export default Sidebar;