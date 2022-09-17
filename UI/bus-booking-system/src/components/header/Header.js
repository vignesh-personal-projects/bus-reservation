import NavBar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import NavLink from 'react-bootstrap/esm/NavLink';

function Header(){
    return (
        <div>
            <NavBar sticky='top' bg='light' color='primary' expand='lg' bg-color='blue' >
                <Container Fluid >
                    <NavBar.Brand font-color='white'>JustBuz</NavBar.Brand>
                    <Nav
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    ></Nav>
                    <NavLink href='/'>Home</NavLink>                    
                </Container>
            </NavBar>
        </div>
    );
}

export default Header;