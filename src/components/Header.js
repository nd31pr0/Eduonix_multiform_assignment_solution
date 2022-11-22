import { Accessible, ShoppingCart } from '@mui/icons-material';
import { AppBar, Avatar, Button, InputBase, Menu, Toolbar, Typography } from '@mui/material'
import { Box, styled } from '@mui/system'
import React from 'react'
import logo from "../Images/eduonixLogo.png"
import infiniti from "../Images/infiniti_img.png"
import bg from "../Images/bg.png"

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
})

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex", 
  gap:"10px", 
  alignItems:"center",
  [theme.breakpoints.up("sm")]:{
    display: "none",
  }
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  margin:5,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const Icons = styled(Box)(({ theme }) => ({
  display: "none", 
  gap:"20px", 
  alignItems:"center",
  [theme.breakpoints.up("sm")]:{
    display: "flex",
  }
}));

const Search = styled("div")(({theme})=> ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius, 
  width: "40%",
  borderColor: 'black',
  position: 'relative'
  // boxShadow: '10px 5px 5px red'

}))



function Header() {
  return (
    <>
      <AppBar sx={{ backgroundColor: "white" }}>
        <StyledToolbar >
          <Typography variant='h6' color="black" sx={{ display:{xs:"none", sm:"block"}}}>
            <img src={logo} alt="logo"/>
          </Typography>
          <Typography color="black">
            Explore
          </Typography>
          <Accessible sx={{ display:{xs: "block", sm:"none"} }}/>
          <Menu
            color="primary"
            label="Explore"
            // onClick={function() {console.log('toggle clicked')}}
            // onSelect={function(val) {console.log(val);}}
          ></Menu>
          <Search>
            <SearchIconWrapper>
                <Search />
              </SearchIconWrapper>
          <InputBase placeholder='search' sx={{ borderRadius:5}}/></Search>
          <Icons >
              <img src={infiniti} alt="infiniti"/>
              <ShoppingCart color="primary"/>
              <Button sx={{ color:"black" }}> login</Button>
              <Button sx={{ backgroundColor:"#F7B541", color:"white" }}> Free Signup</Button>
          </Icons>
          {/* <UserBox>
            <Avatar sx={{ width:30, height:30 }} alt="Travis Howard" src="../images/logo.png" />
            <Typography>Travis</Typography>
          </UserBox> */}
        </StyledToolbar>
        {/* <Box sx={{ width:"vw", height: "vh"}}>
           <img src={bg} alt='bg_img' width=""/>
        </Box> */}
      </AppBar>

    </>
  )
}

export default Header