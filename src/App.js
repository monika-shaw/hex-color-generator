import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'
import { Button, Grid, TextField } from '@mui/material'

function App() {
  const [color, setColor] = useState('')
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
      <Grid className='container'>
        <h3>ShadeGen Hex</h3>
        <TextField
          size='small'
          value={color}
          onChange={(e) => setColor(e.target.value)}
          placeholder='#f15025'
          className={`${error ? 'error' : null}`}
        />
        <Button variant='contained' onClick={handleSubmit} >
          submit
        </Button>
      </Grid>
      <Grid className='colors'>
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