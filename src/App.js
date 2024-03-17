import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'
import { Button, Grid, TextField, Typography } from '@mui/material'

function App() {
    const [color, setColor] = useState('#f15025')
    const [error, setError] = useState(false)
    const [list, setList] = useState(new Values('#f15025').all(10))

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            let colors = new Values(color).all(10)
            setList(colors)
        } catch (error) {
            setError(true)
            console.log(error)
        }
    }

    return (
        <>
            <Grid className='container' style={{ padding: '1rem' }}>
                <Grid item xs={12} style={{ padding: '0rem 1rem' }}>
                    <Typography style={{ fontSize: '2rem', fontWeight: 'bold' }}>ShadeGen Hex</Typography>
                </Grid>
                <Grid container item xs={12}>
                    <Grid item xs={2} style={{ padding: '1rem' }}>
                        <TextField
                            label="Enter hex color code"
                            size='small'
                            fullWidth
                            value={color}
                            onChange={(e) => setColor(e.target.value)}
                            className={`${error ? 'error' : null}`}
                        />

                    </Grid>
                    <Grid item xs={10} style={{ padding: '1rem', display: 'flex', alignItems: 'center' }}>
                        <Button variant='contained' onClick={handleSubmit} disabled={color === ''}>
                            submit
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid container item xs={12} style={{ padding: '1rem' }}>
                {list.map((color, index) => {
                    return (
                        <SingleColor
                            key={index}
                            {...color}
                            index={index}
                            hexColor={color.hex}
                        />

                    )
                })}
            </Grid>
        </>
    )
}

export default App