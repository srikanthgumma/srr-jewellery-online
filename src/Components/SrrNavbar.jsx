import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import './SrrNavbar.css';
function SrrNavbar() {

  
  return (
    <Navbar bg="dark">
    <Container style={{textAlign:"center"}}>
      <Navbar.Brand href="home"  id="header">SRR JEWELLERY</Navbar.Brand>
    
    </Container>
  </Navbar>
   
  );
}

export default SrrNavbar;

