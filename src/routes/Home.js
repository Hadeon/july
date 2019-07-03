import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'row', flexFlow: 'row wrap' }}>
        { /* Render home stuff here */}
        <div style={{ backgroundColor: '#aaa', width: '25rem', height: '10rem', margin: '1rem'}}>

        </div>
        <div style={{ backgroundColor: '#aaa', width: '25rem', height: '10rem', margin: '1rem'}}>

        </div>
      </div>
    )
  }
}