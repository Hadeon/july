import React from 'react';
import GoogleLogin from 'react-google-login';

// Check if the user exists in the DB, if not:
// Add the user to DB in order to track order history and whatnot

const responseGoogle = (res) => {
  console.log(res);
}

const Login = () => {
  return (
    <div>
      <p>Login</p>
      <GoogleLogin 
        clientId=""
        buttonText="Login" 
        onSuccess={responseGoogle} 
        onFailure={responseGoogle}
        cookiePolicy={'single-host-origin'}
      />
    </div>
  )
}

export default Login;