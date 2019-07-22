import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cart from '../../assets/cart.png';
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
        <Link to="/cart" className="cart-button">
          <img src={cart} alt="Cart" width="35rem"/>
        </Link>
      </div>
    )
  }
}