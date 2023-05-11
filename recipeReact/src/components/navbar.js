import 'bootstrap/dist/css/bootstrap.min.css';


import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';

import Navbar from 'react-bootstrap/Navbar';




const NavigationBar=()=>{

  return(

    <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/" style={{fontSize:30,fontStyle:"italic",fontWeight:"bold",textDecoration:"underline"}}>Online Recipes</Navbar.Brand>
          <Nav className="ml-auto">
            <Nav.Link href="/" style={{fontWeight:"bold",margin:"5%"}}>Home</Nav.Link>
            <Nav.Link href="/recipes" style={{fontWeight:"bold",margin:"5%"}}>Recipes</Nav.Link>
            <Nav.Link href="/addRecipes" style={{fontWeight:"bold",margin:"5%"}}>Add Recipes</Nav.Link>

          </Nav>

        </Container>

    </Navbar>

  );

}

export default NavigationBar;
