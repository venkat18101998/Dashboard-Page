import React from 'react'
import { Button, Checkbox, Container, FormControlLabel, Grid, TextField, Typography } from '@mui/material';


const ForgotPassword = () => {
    return (
        <React.Fragment>
            <Container>
                <div style={{ textAlign: 'center' }}>
                    <Typography variant="h4" gutterBottom>Reset Password</Typography>
                    <Typography variant="subtitle1" gutterBottom>Reset your password to Dashboard.</Typography>
                </div>
                <form style={{ textAlign: 'center' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} mt={8}>
                            <TextField
                                fullWidth
                                label="Email"
                                variant="outlined"
                            />
                        </Grid>
                        <Grid item xs={12} mt={3}>
                            <Button
                                variant="contained"
                                color="primary"
                            >
                                Reset
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Container>
        </React.Fragment>
    )
}

export default ForgotPassword
