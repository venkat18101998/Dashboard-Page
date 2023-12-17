import React from 'react'
import PatientsDetails from './PatientsDetails'
import PatientsByGender from './PatientsByGender'
import { Card, Grid } from '@mui/material'
import AdmittedTime from './AdmittedTime'
import CurrentMothPatients from './CurrentMothPatients'
import PatientsByDivision from './PatientsByDivision'
import DetailCard from './DetailCard'
import Footer from '../layout/Footer'

const DashboardContainer = () => {
    return (
        <React.Fragment>
            <div style={{ background: '#f1f5f7' }}>
                <DetailCard />
                <Grid container spacing={3} p={2}>
                    <Grid item xs={12} sm={8}>
                        <Card>
                            <PatientsDetails />
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Card>
                            <PatientsByGender />
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <Card>
                            <AdmittedTime />
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Card className='hiddenOnSmallScreen' >
                            <PatientsByDivision />
                        </Card>
                    </Grid>
                    <Grid item xs={12} sm={3}>
                        <Card>
                            <CurrentMothPatients />
                        </Card>
                    </Grid>
                </Grid>
            </div>
            <Footer />
        </React.Fragment>
    )
}

export default DashboardContainer
