import { CardContent, CardHeader } from '@mui/material';
import React from 'react'
import {
    LineChart,
    Line,
    ResponsiveContainer,
} from 'recharts';

const data = [
    {
        name: 'Page A',
        uv: 2000,
        amt: 2400,
    },
    {
        name: 'Page B',
        uv: 3900,
        amt: 2210,
    },
    {
        name: 'Page C',
        uv: 2500,
        amt: 2290,
    },
    {
        name: 'Page D',
        uv: 3300,
        amt: 2000,
    },
    {
        name: 'Page E',
        uv: 2190,
        amt: 2181,
    },
    {
        name: 'Page F',
        uv: 490,
        amt: 2500,
    },
    {
        name: 'Page G',
        uv: 3490,
        amt: 2100,
    },
];

const CurrentMothPatients = () => {
    return (
        <React.Fragment>
            <div style={{ backgroundColor: '#5664d2' }}>
                <CardHeader
                    title="Current Month Patients"
                    style={{ color: 'white' }}
                />
                <CardHeader
                    title="342"
                    style={{ color: 'white' }}
                />
                <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                        <LineChart data={data}>
                            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
                        </LineChart>
                    </ResponsiveContainer>
                </CardContent>
            </div>
        </React.Fragment>
    )
}

export default CurrentMothPatients
