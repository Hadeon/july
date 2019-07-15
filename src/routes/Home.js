import React, { Component } from 'react';
import StoreItem from '../components/StoreItem';
import './Home.css';

export default class Home extends Component {
  state = {
    count: 50
  }
  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'row', flexFlow: 'row wrap' }}>
        {[...Array(this.state.count)].map((count, index) => (
          <StoreItem key={index} itemNumber={index}/>
        ))}
      </div>
    )
  }
}