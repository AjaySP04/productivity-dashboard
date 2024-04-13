// Login.js
import React from 'react';
import { Container, Box } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import LoginButton from '../components/LoginButton';
import { BACKEND_URL } from './../config'


const Login = () => {
  const handleGoogleSignIn = async () => {
    try {
      let authUrl = `${BACKEND_URL}/auth/google`
      console.log(authUrl)

      authUrl = 'http://localhost:8080/auth/google'

      // Call the backend API to initiate Google OAuth flow
      const response = await fetch(authUrl);
      const data = await response.json();
      console.log(data)
      
      // Redirect the user to the authorization URL received from the backend
      window.location.href = data.authorization_url;
    } catch (error) {
      console.error('Error logging in:', error);
      alert('Error logging in. Please try again.');
    }
  };

  return (
    <Container>
        <Box
            sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            }}
        >
            <LoginButton onClick={handleGoogleSignIn} icon={GoogleIcon} />
        </Box>
    </Container>
  );
};

export default Login;