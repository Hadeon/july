import React, { Component } from 'react';
import './MainContainer.css';

export default class MainContainer extends Component {
  render() {
    return (
      <div className={`main-container ${this.props.sidebarActive ? 'right-align' : 'left-align'}`}>
        {this.props.children}
      </div>
    )
  }
}