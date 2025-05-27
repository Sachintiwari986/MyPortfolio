import { Navbar, Nav, Container, Button } from "react-bootstrap";

function PortfolioNavbar({ scrollToSection, refs, toggleTheme, darkMode }) {
  return (
    <Navbar
      bg={darkMode ? "dark" : "light"}
      variant={darkMode ? "dark" : "light"}
      expand='lg'
      sticky='top'
      style={{
        borderBottom: "2px solid rgba(0,0,0,.2)",
      }}
    >
      <Container>
        <Navbar.Brand
          href='#'
          style={{
            fontSize: 28,
            fontWeight: 600,

            borderBottom: 1,
          }}
        >
          Sachin Tiwari
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='main-navbar' />
        <Navbar.Collapse id='main-navbar'>
          <Nav
            className='ms-auto'
            style={{
              fontSize: 17,
              fontWeight: 600,
              padding: "14px 0",
            }}
          >
            <Nav.Link onClick={() => scrollToSection(refs.aboutRef)}>
              About
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection(refs.skillsRef)}>
              Skills
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection(refs.projectsRef)}>
              Projects
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection(refs.experienceRef)}>
              Experience
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection(refs.educationRef)}>
              Education
            </Nav.Link>
            <Nav.Link onClick={() => scrollToSection(refs.contactRef)}>
              Contact
            </Nav.Link>
            <Nav.Link href='./portfolio.pdf' download>
              Download Resume
            </Nav.Link>
            <Button
              variant={darkMode ? "light" : "dark"}
              size='sm'
              onClick={toggleTheme}
              className='ms-3'
            >
              {darkMode ? "☀️ Light" : "🌙 Dark"}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default PortfolioNavbar;
