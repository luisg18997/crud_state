import React from 'react'
import {
  Navbar,
  NavbarBrand} from 'reactstrap';

  const NavBar = () => {
    return(
      <Navbar expand="lg" style={{padding: 0}}  color="dark" dark>
      <NavbarBrand className='mr-auto' href='/' style={{color: '#B8C5D3', paddingLeft: 15}}>
        CRUD-STATE
      </NavbarBrand>
      </Navbar>
    )
  }

  export default NavBar
