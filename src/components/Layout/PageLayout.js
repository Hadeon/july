import React, { Component } from 'react';
import './PageLayout.css';

import Sidebar from './Sidebar';
import MainContainer from './MainContainer';

export default class PageLayout extends Component {
  state = {
    sidebarActive: false
  }
  openSidebar() {
    this.setState(prevState => ({
      sidebarActive: !prevState.sidebarActive
    }));
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
          <MainContainer sidebarActive={this.state.sidebarActive}>
            {this.props.children}
          </MainContainer>
        </div>

      </React.Fragment>

    )
  }
}