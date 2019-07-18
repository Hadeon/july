import React, { Component } from 'react';
import StoreItem from '../components/StoreItem';
import './Home.css';

export default class Home extends Component {
  state = {
    count: 50
  }
  render() {
    return (
      <div>
        <div className="image-container">
          <h1>Avecus Store</h1>
        </div>
        <div className="store-items">
          {this.props.match.params.item}
        </div>
      </div>
    )
  }
}