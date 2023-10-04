
<<<<<<< Updated upstream
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './NavBar.scss';

function NavBar () {
  return (
    <Navbar expand="lg" className="bg-dark">
        <Navbar.Brand href="/home" className='NavBar-BrandName'>VICTORY AURA</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/home" className='NavBar-Links'>Главная</Nav.Link>
            <Nav.Link href="/news" className='NavBar-Links'>Новости</Nav.Link>
            <Nav.Link href="/about_us" className='NavBar-Links'>О нас</Nav.Link>
            <NavDropdown title={Nickname} className='Dropdown' id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
=======

function NavBar () {
  return (  
    <>
      
    </>
>>>>>>> Stashed changes
  );
}

export default NavBar;