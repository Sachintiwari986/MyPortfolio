import { Navbar, Nav, Container, Button } from 'react-bootstrap';

function PortfolioNavbar({ scrollToSection, refs, toggleTheme, darkMode }) {
    return (
        <Navbar bg={darkMode ? "dark" : "light"} variant={darkMode ? "dark" : "light"} expand="lg" sticky="top">
            <Container>
                <Navbar.Brand href="#">Sachin Tiwari</Navbar.Brand>
                <Navbar.Toggle aria-controls="main-navbar" />
                <Navbar.Collapse id="main-navbar">
                    <Nav className="ms-auto">
                        <Nav.Link onClick={() => scrollToSection(refs.aboutRef)}>About</Nav.Link>
                        <Nav.Link onClick={() => scrollToSection(refs.skillsRef)}>Skills</Nav.Link>
                        <Nav.Link onClick={() => scrollToSection(refs.projectsRef)}>Projects</Nav.Link>
                        <Nav.Link onClick={() => scrollToSection(refs.experienceRef)}>Experience</Nav.Link>
                        <Nav.Link onClick={() => scrollToSection(refs.educationRef)}>Education</Nav.Link>
                        <Nav.Link onClick={() => scrollToSection(refs.contactRef)}>Contact</Nav.Link>
                        <Nav.Link href="/SachinTiwari_Resume.pdf" download>Download Resume</Nav.Link>
                        <Button variant={darkMode ? 'light' : 'dark'} size="sm" onClick={toggleTheme} className="ms-3">
                            {darkMode ? '☀️ Light' : '🌙 Dark'}
                        </Button>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default PortfolioNavbar;
