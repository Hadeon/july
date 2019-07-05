import React from 'react';
import './Sidebar.css';

const Sidebar = () => {
  return (
    <div className="sidebar-body">
      <h2>Sidebar Header</h2>
      <ul>
        <li>A listed element</li>
        <li>Some more listed stuff</li>
        <li>Maybe these are links</li>
        <li>Or could just be data</li>
        <li>Even buttons</li>
      </ul>
    </div>
  )
}

export default Sidebar;