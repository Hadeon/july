import React from 'react';
import GoogleLogin from 'react-google-login';

require('dotenv').config()

// Check if the user exists in the DB, if not:
// Add the user to DB in order to track order history and whatnot

const responseFailure = (res) => {
  console.log(res);
}

const responseSuccess = (res) => {
  let id_token = res.getAuthResponse().id_token;
  console.log('Login triggered: ' + id_token);
}

const Login = () => {
  return (
    <div>
      <GoogleLogin 
        clientId='709656880482-oq2l4u3dm519nvgiiie6mufokqt73umq.apps.googleusercontent.com'
        buttonText="Login" 
        onSuccess={responseSuccess} 
        onFailure={responseFailure}
        cookiePolicy={'single_host_origin'}
      />
      <p>{process.env.GOOGLE_CLIENT_ID}</p>
    </div>
  )
}

export default Login;