import React, { useState } from 'react'
import images from '../../resources/images'
import { Grid, Container, Typography, MenuItem, Menu, Divider } from '@mui/material'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import PsychologyRoundedIcon from '@mui/icons-material/PsychologyRounded';
import DangerousRoundedIcon from '@mui/icons-material/DangerousRounded';



const PatientsByDivision = () => {

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };


    const iconData = [
        { icon: <HomeRoundedIcon />, name: 'Division', value: 'P1' },
        { icon: <FavoriteBorderRoundedIcon />, name: 'Medicine', value: 78 },
        { icon: <PsychologyRoundedIcon />, name: 'Vaccines', value: 88 },
        { icon: <DangerousRoundedIcon />, name: 'Surgery', value: 45 },
    ];


    return (
        <React.Fragment>
            <Container>
                <Grid container spacing={2} alignItems="center" style={{ marginTop: '20px' }}>
                    <Grid item>
                        <Typography className='cardTitle'>
                            Patients By Division
                        </Typography>
                    </Grid>
                    <Grid item style={{ marginLeft: '20px' }}>
                        <img
                            src={images.sort_down}
                            alt="Sort Down"
                            onClick={handleClick}
                            style={{ cursor: 'pointer' }}
                        />
                        <Menu
                            anchorEl={anchorEl}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem value={'Profit'} onClick={handleClose}>
                                Sales Report
                            </MenuItem>
                            <MenuItem value={'Profit'} onClick={handleClose}>
                                Export Report
                            </MenuItem>
                            <MenuItem value={'Profit'} onClick={handleClose}>
                                Profit
                            </MenuItem>
                            <MenuItem value={'Action'} onClick={handleClose}>
                                Action
                            </MenuItem>
                        </Menu>
                    </Grid>
                </Grid>
                <div style={{ marginTop: '20px' }}>
                    <Container>
                        {iconData.map((item, index) => (
                            <React.Fragment key={index}>
                                {index !== 0 && <Divider orientation="vertical" style={{ margin: '0px 10px', borderLeft: '3px dashed #d5d8f4', height: '60px' }} />}
                                <div className="icon-item">
                                    <div className='iconDivition'>{item.icon}</div>
                                    <div className='divitionName'>{item.name}</div>
                                    <div>{item.value}</div>
                                </div>
                            </React.Fragment>
                        ))}
                        <Divider orientation="vertical" style={{ margin: '0px 10px', borderLeft: '3px dashed #d5d8f4', height: '60px' }} />
                    </Container>
                </div>
            </Container>
        </React.Fragment>
    )
}

export default PatientsByDivision
