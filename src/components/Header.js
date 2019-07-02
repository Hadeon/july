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
          <div onClick={() => this.openSidebar()} className={`arrow ${this.state.clicked ? 'down' : 'left'}`}/>
        </div>
        <div className={`side-container ${this.state.clicked ? 'active' : 'hidden'}`}>

        </div>
      </React.Fragment>

    )
  }
}