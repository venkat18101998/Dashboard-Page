import React from 'react'
import { Typography, Grid } from '@mui/material';

const Footer = () => {
    return (
        <React.Fragment>
            <Grid container justifyContent="space-between">
                <Grid item marginLeft={2}>
                    <Typography gutterBottom>
                        2023 © geekonomy.
                    </Typography>
                </Grid>
                <Grid item marginRight={2}>
                    <Typography color="textSecondary">
                        Crafted with 🛠 by Venkat Kosuri
                    </Typography>
                </Grid>
            </Grid>
        </React.Fragment>

    )
}

export default Footer
