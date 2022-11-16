import React, { useState } from 'react';
import { Navbar, Nav} from 'rsuite';
import { Link } from 'react-router-dom';
import '../Nav.css'
import '../../node_modules/rsuite/dist/rsuite.min.css'


const NavBar = () => {
    const [activeKey, setActiveKey] = useState(null);

    const CustomNavbar = ({ onSelect, activeKey, ...props }) => {
    return (
      <Navbar {...props} className='navbar-container'>
        <Nav onSelect={onSelect} activeKey={activeKey} className='navbar-content'>
          <Nav.Item className='navbar-item' eventKey="1">
            <Link to='/'>
                Home
            </Link>
          </Nav.Item>
          <Nav.Item className='navbar-item' eventKey="2">
          <Link to='/artists'>
            Meet the Team! 
          </Link>
          </Nav.Item>
        </Nav>
        {/* <Nav pullRight>
          <Nav.Item icon={<CogIcon />}>Settings</Nav.Item>
        </Nav> */}
      </Navbar>
    );
  };


  return (
    <div className='sidenav-container'>
      <CustomNavbar appearance="inverse" activeKey={activeKey} onSelect={setActiveKey} />
    </div>
  )
}

export default NavBar;