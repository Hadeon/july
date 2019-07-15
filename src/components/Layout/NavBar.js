import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';
import './Navbar.css';

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
        <div className="nav-buttons">
          <GoogleLogin 
            clientId='709656880482-oq2l4u3dm519nvgiiie6mufokqt73umq.apps.googleusercontent.com'
            buttonText="Login" 
            onSuccess={this.responseSuccess} 
            onFailure={this.responseFailure}
            cookiePolicy={'single_host_origin'}
          />
        </div>
      </div>
    )
  }
}