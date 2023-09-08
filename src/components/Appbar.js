import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';



export const Appbar = () => {

  const about =()=>{
    const element = document.getElementById('about');
    if (element) {
     
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const experience =()=>{
    const element = document.getElementById('experience');
    if (element) {
     
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const projects =()=>{
    const element = document.getElementById('projects');
    if (element) {
     
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const qualification =()=>{
    const element = document.getElementById('qualification');
    if (element) {
     
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const skills =()=>{
    const element = document.getElementById('skills');
    if (element) {
     
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const home =()=>{
    const element = document.getElementById('home');
    if (element) {
     
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const contact =()=>{
    const element = document.getElementById('contact');
    if (element) {
     
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
  return (
  
    <Navbar fixed="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand  onClick={home}>Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link onClick={home} >Home</Nav.Link>
            <Nav.Link onClick={about}>About</Nav.Link>
            <Nav.Link  onClick={experience} >Experience</Nav.Link>
            <Nav.Link   onClick={projects}>Projects</Nav.Link>
            <Nav.Link  onClick={qualification}>Qualification</Nav.Link>
           
          </Nav>
          <Nav >
            <Nav.Link   onClick={skills}>Skills</Nav.Link>
            <Nav.Link onClick={contact} >Contact</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

   
  )
}



