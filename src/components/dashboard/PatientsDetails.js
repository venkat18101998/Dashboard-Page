import { Button, ButtonGroup, Container, Grid } from '@mui/material';
import React from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: 'Oct2019',
        inpatients: 4000,
        ourpatients: 2400,
        amt: 2400,
    },
    {
        name: 'Nov2019',
        inpatients: 3000,
        ourpatients: 1398,
        amt: 2210,
    },
    {
        name: 'Dec2020',
        inpatients: 2000,
        ourpatients: 9800,
        amt: 2290,
    },
    {
        name: 'Jan2020',
        inpatients: 2780,
        ourpatients: 3908,
        amt: 2000,
    },
    {
        name: 'Feb2020',
        inpatients: 1890,
        ourpatients: 4800,
        amt: 2181,
    },
    {
        name: 'Mar2020',
        inpatients: 2390,
        ourpatients: 3800,
        amt: 2500,
    }
];
const PatientsDetails = () => {


    const CustomTooltip = ({ active, payload, label }) => {
        if (active) {
            return (
                <div className="custom-tooltip">
                    <p style={{ backgroundColor: '#bfc2c6' }}>{label}</p>
                    <hr />
                    <p style={{ color: '#82ca9d' }}>
                        <span style={{ color: '#82ca9d' }}>●</span> Ourpatients: {payload[0].value}
                    </p>
                    <p style={{ color: '#8884d8' }}>
                        <span style={{ color: '#8884d8' }}>●</span> Inpatients: {payload[1].value}
                    </p>
                </div>
            );
        }
        return null;
    };

    return (
        <React.Fragment>
            <Container>
                <Grid p={2} container spacing={2} alignItems="center" justifyContent="space-between">
                    <Grid item xs={12} sm={7}>
                        <span className='cardTitle'>Ourpatients vs Inpatients Trend</span>
                    </Grid>
                    <Grid item xs={4} className='patientBtn'>
                        <ButtonGroup variant="outlined" aria-label="outlined button group">
                            <Button className="today">Today</Button>
                            <Button className="weekly">Weekly</Button>
                            <Button className="monthly">Monthly</Button>
                        </ButtonGroup>
                    </Grid>
                </Grid>
                <ResponsiveContainer width="100%" height={400}>
                    <BarChart
                        width={200}
                        height={100}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="1 1" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip content={CustomTooltip} />
                        <Bar dataKey="ourpatients" fill="#82ca9d" barSize={15} />
                        <Bar dataKey="inpatients" fill="#8884d8" barSize={15} />
                    </BarChart>
                </ResponsiveContainer>
            </Container>
        </React.Fragment>
    )
}

export default PatientsDetails
