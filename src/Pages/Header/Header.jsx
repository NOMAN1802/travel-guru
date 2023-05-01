import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import logo from '../../assets/logo.png'
import { FaSistrix } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div>
            <Navbar className='container' collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        
        <Navbar.Brand href="#home"><img style={{height: 35,width: 80 }} src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
         
            <span> <FaSistrix></FaSistrix><input   className='border' type="text" placeholder='search'/ ></span>

          </Nav>
          <Nav className='menu'>
            <Link  to="/" style={{ textDecoration:'none', marginRight: '10px',color:'gray'}}>Home</Link>
            <Link to ="/destination"style={{ textDecoration:'none', marginRight: '10px',color:'gray'}}>
              Destination
            </Link>
            <Link to="/blog" style={{ textDecoration:'none', marginRight: '10px',color:'gray'}}>Blog</Link>
            <Link to ="/contact"style={{ textDecoration:'none', marginRight: '10px',color:'gray'}}>
              Contact
            </Link>
          </Nav>
         <div> 
            <Link to ='/login'><button className='btn btn-secondary'>Login</button></Link>
            </div>
        </Navbar.Collapse>
        
      </Container>
    </Navbar>
        </div>
    );
};

export default Header;