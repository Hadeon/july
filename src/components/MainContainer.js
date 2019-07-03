import React, { Component } from 'react';
import './MainContainer.css';

export default class MainContainer extends Component {
  render() {
    return (
      <div className={`main-container ${this.props.sidebarActive ? 'right-align' : 'left-align'}`}>
        <h2>test</h2>
      </div>
    )
  }
}