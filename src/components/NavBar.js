import React, { useState } from 'react';
import { Navbar, Nav} from 'rsuite';
import { Link } from 'react-router-dom';
import '../Nav.css'
import '../../node_modules/rsuite/dist/rsuite.min.css'


const NavBar = () => {


    return (
      <Navbar className='navbar-container'>
        <Nav  className='navbar-content'>
          <Nav.Item className='navbar-item'>
            <Link to='/'>
                Home
            </Link>
          </Nav.Item>
          <Nav.Item className='navbar-item'>
          <Link to='/artists'>
            Meet the Team! 
          </Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    );
}

export default NavBar;