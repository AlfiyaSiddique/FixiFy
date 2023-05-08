import React from 'react';
import { GoogleLogin } from 'react-google-login';

const clientId = "987585806805-ndobeio4ots1qh65v4or2i62v08a2evf.apps.googleusercontent.com"; 

function GoogleSignInButton() {
  const onSuccess = (response) => {
    console.log('Login successful:', response);
  };

  const onFailure = (error) => {
    console.error('Login failed:', error);
    // Handle error
  };

  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Sign in with Google"
      onSuccess={onSuccess}
      onFailure={onFailure}
      cookiePolicy={'single_host_origin'}
      // redirectUri={'http://localhost:5173/customer'}
    />
  );
}

export default function Login() {
  return (
    <div >
      <GoogleSignInButton />
    </div>
  );
}