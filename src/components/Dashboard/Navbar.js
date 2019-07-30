import React, {useState} from 'react'
import {NavLink} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem} from 'reactstrap';

  const NavBar = () => {
    const [toggle, setToggle] = useState(false);

    const onToggle = () => {
      setToggle(!toggle);
    };
    return(
      <Navbar expand="lg" style={{padding: 0}}  color="dark" dark>
      <NavbarBrand className='mr-auto' href='/' style={{color: '#B8C5D3'}}>
        CRUD-STATE
      </NavbarBrand>
      <NavbarToggler onClick={onToggle} className='ml-auto'/>
      <Collapse isOpen={toggle} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem className='mr-2 ml-3'>
          </NavItem>
          <NavItem className='mr-3 ml-3'>

          </NavItem>
        </Nav>
      </Collapse>
      </Navbar>
    )
  }

  export default NavBar
