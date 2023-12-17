import React, { useState } from 'react'
import { Button, Checkbox, Container, FormControlLabel, Grid, TextField, Typography } from '@mui/material';


const LoginForm = () => {

    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false,
    });

    const handleInputChange = (e) => {
        const { name, value, checked, type } = e.target;
        const fieldValue = type === 'checkbox' ? checked : value;
        setFormData({
            ...formData,
            [name]: fieldValue,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!formData.email || !formData.password) {
            alert('Please fill in all required fields.');
            return;
        }
        localStorage.setItem('formData', JSON.stringify(formData));
        window.location.href = '/Dashboard';
    };


    return (
        <React.Fragment>
            <Container>
                <div style={{ textAlign: 'center' }}>
                    <Typography variant="h4" gutterBottom>Welcome Back!</Typography>
                    <Typography variant="subtitle1" gutterBottom>Sign in to continue H-Care</Typography>
                </div>
                <form style={{ textAlign: 'center', marginTop: '25px' }} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Email"
                                variant="outlined"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Password"
                                type="password"
                                variant="outlined"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12} container justifyContent="space-between" alignItems="center">
                            <FormControlLabel
                                control={<Checkbox color="primary" />}
                                label="Remember me"
                                style={{ alignSelf: 'flex-end' }}
                                name="rememberMe"
                                checked={formData.rememberMe}
                                onChange={handleInputChange}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                            >
                                Submit
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </React.Fragment>
    )
}

export default LoginForm
