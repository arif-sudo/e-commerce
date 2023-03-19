import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { useCart } from 'react-use-cart';

const Header = () => {
  const { totalItems } = useCart()
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand ><NavLink style={{'textDecoration': 'none'}} to='/'><i className=" mx-2 fa-solid fa-cart-shopping"></i>BrandShop </NavLink></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link ><NavLink style={{'textDecoration': 'none'}} to='/'>Home</NavLink></Nav.Link>
            <Nav.Link ><NavLink style={{'textDecoration': 'none'}} to='/products'>Products</NavLink></Nav.Link>
           
          </Nav>
          <Nav className="d-flex">
            
            <Button style={{width: '100px'}}  size='md' variant="outline-success"><Link style={{'textDecoration': 'none'}} to='/cart'>Cart({totalItems})</Link></Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default Header