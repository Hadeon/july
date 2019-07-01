import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
  state = {
    clicked: false
  }
  openSidebar() {
    this.setState(prevState => ({
      clicked: !prevState.clicked
    }));
  }
  render() {
    return (
      <React.Fragment>
        <div className="header-container">
          <h2 onClick={() => this.openSidebar()}>Open Sidebar</h2>
        </div>
        <div className={`side-container ${this.state.clicked ? 'active' : 'hidden'}`}>

        </div>
      </React.Fragment>

    )
  }
}