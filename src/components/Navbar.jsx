import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function ProfessionalNavbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      className={`navbar-premium ${scrolled ? 'scrolled' : ''}`}
      style={{ 
        background: scrolled ? 'white' : 'var(--primary)',
        transition: 'all 0.3s ease'
      }}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <span style={{
            fontSize: '1.8rem',
            fontWeight: 700,
            color: scrolled ? 'var(--primary)' : 'white',
            fontFamily: "'Playfair Display', serif"
          }}>
            LifeFlow
          </span>
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto" style={{ gap: '1rem' }}>
            <Nav.Link 
              as={Link} 
              to="/" 
              style={{ 
                color: scrolled ? 'var(--dark)' : 'white',
                fontWeight: 500,
                fontSize: '1.1rem'
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/donate" 
              style={{ 
                color: scrolled ? 'var(--dark)' : 'white',
                fontWeight: 500,
                fontSize: '1.1rem'
              }}
            >
              Donate
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/request" 
              style={{ 
                color: scrolled ? 'var(--dark)' : 'white',
                fontWeight: 500,
                fontSize: '1.1rem'
              }}
            >
              Request
            </Nav.Link>
            <Nav.Link 
              as={Link} 
              to="/about" 
              style={{ 
                color: scrolled ? 'var(--dark)' : 'white',
                fontWeight: 500,
                fontSize: '1.1rem'
              }}
            >
              About
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}