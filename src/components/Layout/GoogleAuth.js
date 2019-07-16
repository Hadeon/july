import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

const GoogleAuth = () => {
  const dispatch = useDispatch();
  let user = useSelector(state => state.user.userData);

  const responseSuccess = (res) => {
    // let id_token = res.getAuthResponse().id_token;
    dispatch({ 
      type: 'SET_USER',
      payload: res.googleId
    });
    console.log(user);
  }

  const responseFailure = (res) => {
    console.log(res);
  }
  return (
    <div>
      <GoogleLogin 
        clientId='709656880482-oq2l4u3dm519nvgiiie6mufokqt73umq.apps.googleusercontent.com'
        buttonText="Login" 
        onSuccess={responseSuccess} 
        onFailure={responseFailure}
        cookiePolicy={'single_host_origin'}
      />
    </div>
  )
}

export default GoogleAuth;