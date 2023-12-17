import React, { useState } from 'react'
import { Button, Grid, Menu, MenuItem } from '@mui/material';
import { PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';
import image from '../../resources/images'

const data = [
    { name: 'Female', value: 500 },
    { name: 'Male', value: 200 },
];

const COLORS = ['#8884d8', '#82ca9d'];

const PatientsByGender = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedMonth, setSelectedMonth] = useState('Apr');

    const handleButtonClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuItemClick = (month) => {
        setSelectedMonth(month);
        setAnchorEl(null);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const CustomTooltip = ({ active, payload }) => {
        if (active) {
            const total = data.reduce((acc, entry) => acc + entry.value, 0);
            const percentage = ((payload[0].value / total) * 100).toFixed(2) + '%';

            return (
                <div className="custom-tooltip">
                    <p>{`${payload[0].name}: ${percentage}`}</p>
                </div>
            );
        }

        return null;
    };

    return (
        <React.Fragment>
            <Grid p={2} container spacing={2} alignItems="center" justifyContent="space-between">
                <Grid item xs={12} sm={7}>
                    <span className='cardTitle'>Patients By Gender</span>
                </Grid>
                <Grid item xs={3}>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        {['Apr', 'May', 'Jun', 'July'].map((month) => (
                            <MenuItem
                                key={month}
                                onClick={() => handleMenuItemClick(month)}
                                selected={month === selectedMonth}
                            >
                                {month}
                            </MenuItem>
                        ))}
                    </Menu>
                    <Button
                        variant="contained"
                        onClick={handleButtonClick}
                        startIcon={<img src={image.down_arrow} alt="icon" />}
                        style={{ backgroundColor: '#ffffff', color: '#000000', border: '1px solid black', }}
                    >
                        {selectedMonth}
                    </Button>
                </Grid>
            </Grid>
            <PieChart width={500} height={320}>
                <Pie
                    data={data}
                    cx={200}
                    cy={120}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
                <Legend />
            </PieChart>
        </React.Fragment>
    );
};

export default PatientsByGender
