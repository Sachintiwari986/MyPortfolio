// import styles from './Navbar.module.css';

// function PortfolioNavbar() {
//     return (
//         <nav className={styles.navbar}>
//             <div className={styles.logo}>Sachin Tiwari</div>
//             <ul className={styles.navLinks}>
//                 <li><a href="#about">About</a></li>
//                 <li><a href="#skills">Skills</a></li>
//                 <li><a href="#experience">Experience</a></li>
//                 <li><a href="#education">Education</a></li>
//                 <li><a href="#contact">Contact</a></li>
//             </ul>
//         </nav>
//     );
// }

// export default PortfolioNavbar;


import { Navbar, Nav, Container } from 'react-bootstrap';

function PortfolioNavbar({ scrollToSection, refs }) {
    return (
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
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
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default PortfolioNavbar;
