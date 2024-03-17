import React, { useState, useEffect } from 'react'
import rgbToHex from './utils'
import { Grid, Typography } from '@mui/material'

const SingleColor = ({ rgb, weight, index, hexColor }) => {
    const [alert, setAlert] = useState(false)
    const bcg = rgb.join(',')
    const hex = rgbToHex(...rgb)
    const hexValue = `#${hexColor}`

    useEffect(() => {
        const timeout = setTimeout(() => {
            setAlert(false)
        }, 3000)
        return () => clearTimeout(timeout)
    }, [alert])

    return (
        <Grid item xs={2}
            className={`color ${index > 10 && 'color-light'}`}
            style={{ backgroundColor: `rgb(${bcg})`, height: '18vh', textAlign: 'center', padding: '2rem' }}
            onClick={() => {
                setAlert(true)
                navigator.clipboard.writeText(hexValue)
            }}
        >
            <Grid item xs={12}>
                <Typography className='percent-value'>{weight}%</Typography>
            </Grid>
            <Grid item xs={12}
            >   <Typography className='color-value'>{hexValue}</Typography></Grid>
            <Grid item xs={12}>
                {alert && <Typography className='alert'>copied to clipboard</Typography>}
            </Grid>
        </Grid>
    )
}

export default SingleColor