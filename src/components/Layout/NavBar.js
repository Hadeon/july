import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

import GoogleAuth from './GoogleAuth';

export default class Navbar extends Component {

  responseFailure = (res) => {
    console.log(res);
  }
  
  responseSuccess = (res) => {
    let id_token = res.getAuthResponse().id_token;
    console.log('Login triggered: ' + id_token);
  }

  render() {
    return (
      <div className="container navbar">
        <div onClick={() => this.props.openSidebar()} className="arrow-container">
          <div className={`arrow ${this.props.active ? 'down' : 'left'}`}></div>
        </div>
        <div className="google-button">
          <GoogleAuth/>
        </div>
        <Link to="/cart">
          <div className="cart-button"/>
        </Link>
      </div>
    )
  }
}