import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const GoogleAuth = () => {
  const dispatch = useDispatch();
  const [loggedIn, setLoggedIn] = useState(false)
  let user = useSelector(state => state.user.userData);

  const responseSuccess = (res) => {
    dispatch({ 
      type: 'SET_USER',
      payload: res.googleId
    });
    setLoggedIn(true);
    console.log(user);
  }

  const responseFailure = (res) => {
    console.log(res);
  }

  const logoutSuccess = () => {
    dispatch({
      type: 'SET_USER',
      payload: ''
    })
    setLoggedIn(false);
  }
  return (
    <div>
      { loggedIn ? (
        <GoogleLogout
          buttonText="Logout"
          onLogoutSuccess={logoutSuccess}
          onFailure={responseFailure}
        />
      ) : (
        <GoogleLogin 
          clientId='709656880482-oq2l4u3dm519nvgiiie6mufokqt73umq.apps.googleusercontent.com'
          buttonText="Login" 
          onSuccess={responseSuccess} 
          onFailure={responseFailure}
          cookiePolicy={'single_host_origin'}
        />
      )}
    </div>
  )
}

export default GoogleAuth;