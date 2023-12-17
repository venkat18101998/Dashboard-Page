import React from 'react'
import { Button, Container, Grid, TextField, Typography } from '@mui/material';


const RegisterForm = () => {
    return (
        <React.Fragment>
            <Container>
                <div style={{ textAlign: 'center' }}>
                    <Typography variant="h4" gutterBottom>Register account</Typography>
                    <Typography variant="subtitle1" gutterBottom>Get your free account now.</Typography>
                </div>
                <form style={{ textAlign: 'center' }}>
                    <Grid container spacing={2} mt={3}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Email"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Username"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Password"
                                type="password"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                variant="contained"
                                color="primary"
                            >
                                Register
                            </Button>
                        </Grid>
                    </Grid>
                    <Typography mt={4} gutterBottom>By registering you agree to the <span className="pageName"> Terms of Use </span></Typography>
                </form>
            </Container>
        </React.Fragment>
    )
}

export default RegisterForm
