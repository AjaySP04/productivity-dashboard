// Button.js
import React from 'react';
import { Button, Typography } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';

const LoginButton = ({ onClick }) => {
    return (
        <Button onClick={onClick}
            component="label"
            variant="contained"
            role={undefined}
            tabIndex={-1}
            startIcon={<GoogleIcon />}
        >
            <Typography variant="p" gutterBottom>
                Sign In with Google
            </Typography>
        </Button>
    );
};

export default LoginButton;
