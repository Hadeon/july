import React, { Component } from 'react';
import './Home.css';

import StoreItem from '../components/StoreItem';

export default class Home extends Component {
  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'row', flexFlow: 'row wrap' }}>
        <StoreItem/>
        <StoreItem/>
        <StoreItem/>
        <StoreItem/>
        <StoreItem/>
        <StoreItem/>
        <StoreItem/>
      </div>
    )
  }
}