import React, { Component } from 'react';
import './PageLayout.css';

import Sidebar from './Sidebar';
import MainContainer from './MainContainer';

export default class PageLayout extends Component {
  state = {
    sidebarActive: true
  }
  openSidebar() {
    this.setState(prevState => ({
      sidebarActive: !prevState.sidebarActive
    }));
    this.props.resizeBody();
  }
  render() {
    return (
      <React.Fragment>
        <div className="container navbar">
          <div onClick={() => this.openSidebar()} className={`arrow ${this.state.sidebarActive ? 'down' : 'left'}`}/>
        </div>
        <div style={{
          display: 'flex',
          flexDirection: 'column'
        }}>
          <div className={`container sidebar ${this.state.sidebarActive ? 'active' : 'hidden'}`}>
            <Sidebar/>
          </div>
          <MainContainer sidebarActive={this.state.sidebarActive}/>
        </div>

      </React.Fragment>

    )
  }
}