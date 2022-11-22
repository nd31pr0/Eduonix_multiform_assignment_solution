import { TextField, Typography } from '@mui/material'
import React from 'react'

function Content() {
  return (
    <>
      <Typography>
        <TextField id="outlined-basic" label="Outlined" variant="outlined" />
        <TextField id="filled-basic" label="Filled" variant="filled" />

      </Typography>
    </>
  )
}

export default Content