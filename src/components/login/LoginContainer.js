import React, { useState } from 'react';
import images from '../../resources/images';
import { Container, Grid, Typography } from '@mui/material';
import LoginForm from './LoginForm';
import './LoginStyle.css';
import RegisterForm from './RegisterForm';
import ForgotPassword from './ForgotPassword';

const LoginContainer = () => {
    const [showLoginForm, setShowLoginForm] = useState(true);
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [showRegisterForm, setShowRegisterForm] = useState(false);

    const handleForgotPasswordClick = () => {
        setShowLoginForm(false);
        setShowForgotPassword(true);
        setShowRegisterForm(false)
    };


    const handleShowLoginClick = () => {
        setShowLoginForm(true);
        setShowForgotPassword(false);
        setShowRegisterForm(false)
    };

    const handleShowRegisterForm = () => {
        setShowLoginForm(false);
        setShowForgotPassword(false);
        setShowRegisterForm(true)
    };



    const userName = showLoginForm ? 'Venkat' : 'Dev'

    return (
        <Grid container justify="center" spacing={2}>
            <Grid item xs={12} sm={6} md={4} lg={4} xl={4} mb={0} mt={8}>
                <Container>
                    {showLoginForm && <LoginForm onForgotPasswordClick={handleForgotPasswordClick} />}
                    {showForgotPassword && <ForgotPassword />}
                    {showRegisterForm && <RegisterForm />}
                </Container>
                <Container style={{ textAlign: 'center' }}>
                    {!showForgotPassword && !showRegisterForm && (
                        <Typography mt={3} className='termsCondition' variant="subtitle1" gutterBottom onClick={handleForgotPasswordClick}>
                            Forgot your password?
                        </Typography>
                    )}
                    {showForgotPassword || showRegisterForm ? <Typography mt={6} variant="subtitle1" gutterBottom >
                        Don't have an account ? <span className="pageName" onClick={handleShowLoginClick}>Log in</span>
                    </Typography> : ""}
                    {!showRegisterForm && !showForgotPassword && (
                        <Typography mt={3} variant="subtitle1" gutterBottom >
                            Don't have an account ? <span className="pageName" onClick={handleShowRegisterForm}>Register</span>
                        </Typography>
                    )}

                    <Typography mt={4} variant="subtitle1" gutterBottom onClick={handleShowLoginClick}>
                        © 2022 . Crafted with <img src={images.heart} alt='heart' /> by {userName}
                    </Typography>
                </Container>

            </Grid>
            <Grid item xs={8}>
                <img src={images.logo_img} alt='login' className="logo-image" />
            </Grid>
        </Grid >
    );
};

export default LoginContainer;
