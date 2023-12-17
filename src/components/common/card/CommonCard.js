import React from 'react'
import images from '../../../resources/images'
import { Avatar, Card, CardContent, Typography } from '@mui/material'

const CommonCard = (props) => {

    const { image, amount, subTitle } = props

    return (
        <React.Fragment>
            <Card style={{ display: 'flex', alignItems: 'center', paddingLeft: 30, paddingRight: 30 }}>
                <div className="outer-container">
                    <Avatar className="avatar-image" alt="Bed" src={image} />
                </div>
                <div style={{ flex: 1 }}>
                    <CardContent style={{ textAlign: 'center' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                            <Typography variant="h5" component="div">
                                {amount}
                            </Typography>
                        </div>
                        <Typography variant="body2" color="text.secondary">
                            {subTitle}
                        </Typography>
                    </CardContent>
                </div>
                <div style={{ alignItems: 'flex-start', alignSelf: 'flex-start', paddingTop: 10 }}>
                    <img alt="Bed" src={images.card_line} style={{ marginTop: '10px', width: '24px', height: '24px' }} />
                </div>
            </Card>

        </React.Fragment>
    )
}

export default CommonCard
