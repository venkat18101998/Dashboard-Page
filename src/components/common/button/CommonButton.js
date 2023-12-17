import { Button } from '@mui/material'
import React from 'react'

const CommonButton = (props) => {
    const { label, variant, className, style, startIcon } = props

    const defaultStyles = {
        textTransform: 'none',
        borderRadius: '8px',
    };

    const mergedStyles = { ...defaultStyles, ...style };

    return (
        <React.Fragment>
            <Button style={mergedStyles} startIcon={startIcon} className={`buttonName ${className}`} variant={variant}>{label}</Button>
        </React.Fragment>
    )
}

export default CommonButton;
