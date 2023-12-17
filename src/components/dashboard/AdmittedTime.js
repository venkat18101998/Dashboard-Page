import { Button, Grid, Menu, MenuItem } from '@mui/material';
import React, { useState } from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import images from '../../resources/images';


const data = [
    {
        name: '',
        uv: 10,
    },
    {
        name: '19:00',
        uv: 50,
    },
    {
        name: '20:00',
        uv: 100,
    },
    {
        name: '21:00',
        uv: 70,
    },
    {
        name: '22:00',
        uv: 160,
    },
    {
        name: '19 Sep',
    },
    {
        name: '01:00',
    }
];


const toolImages = {
    plus: images.plus,
    minus: images.minus,
    zoom: images.zoom,
    hand: images.hand,
    home: images.home,
    menu: images.menu,
};

const getColor = (uv) => {

    if (uv >= 0 && uv <= 50) {
        return '#a6cee3';
    } else if (uv > 50 && uv <= 100) {
        return '#1f78b4';
    }
    return '#8884d8';
};




const AdmittedTime = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedMonth, setSelectedMonth] = useState('Today');

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

    return (
        <React.Fragment>
            <Grid container p={2} spacing={2} alignItems="center" justifyContent="space-between">
                <Grid item xs={12} sm={7}>
                    <span className='cardTitle'>Time Admitted</span>
                </Grid>
                <Grid item xs={3} >
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        {['Today', 'Tomorrow'].map((month) => (
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
                        startIcon={<img src={images.down_arrow} alt="icon" />}
                        style={{ backgroundColor: '#ffffff', color: '#000000', border: '1px solid black', }}
                    >
                        {selectedMonth}
                    </Button>
                </Grid>
            </Grid>
            <Grid container justifyContent="flex-end" spacing={2}>
                {Object.keys(toolImages).map((key, index, array) => (
                    <Grid item key={key}>
                        <img src={toolImages[key]} alt={key} style={{ marginRight: index === array.length - 1 ? 25 : 0 }} />
                    </Grid>
                ))}
            </Grid>
            <ResponsiveContainer width="100%" height={400}>
                <AreaChart
                    data={data}
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Area type="monotone" dataKey="uv" stroke="#8884d8" fill={(entry) => getColor(entry.uv)} />
                </AreaChart>
            </ResponsiveContainer>
        </React.Fragment>
    )
}

export default AdmittedTime;
