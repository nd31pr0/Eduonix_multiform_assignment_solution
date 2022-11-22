import { Box } from '@mui/material'
import { Container } from '@mui/system'
import React from 'react'
import footer_img from "../Images/footer_img.png"

function Footer() {
  return (
    <React.Fragment className="footer" >
      <Container sx={{ marginBottom:5, width: 'vw' }}>
            <img src={footer_img} alt="logo"  marginLeft="10" height="100%" width="100%"/>
      </Container>
    </React.Fragment>
      
  )
}

export default Footer