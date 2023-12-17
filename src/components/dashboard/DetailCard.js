import { Grid } from '@mui/material'
import React from 'react'
import images from '../../resources/images'
import CommonCard from '../common/card/CommonCard'


const DetailCard = () => {

    return (
        <React.Fragment>
            <Grid container spacing={2} p={2}>
                <Grid item xs={12} sm={6} md={3}>
                    <CommonCard image={images.bed} amount={'3256'} subTitle={'Total Patients'} />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <CommonCard image={images.user} amount={'395'} subTitle={'Available Staff'} />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <CommonCard image={images.galary} amount={'$2536'} subTitle={'Avg Treat Cost'} />
                </Grid>
                <Grid item xs={12} sm={6} md={3}>
                    <CommonCard image={images.car} amount={'38'} subTitle={'Available Cars'} />
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default DetailCard
