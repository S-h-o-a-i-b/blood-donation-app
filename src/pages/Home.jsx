import { Container, Button, Row, Col, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function PremiumHome() {
  return (
    <div style={{ overflow: 'hidden' }}>
      {/* Hero Section */}
      <div className="section-full" style={{ 
        background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-dark) 100%)',
        color: 'white',
        padding: '8rem 0',
        marginBottom: '5rem'
      }}>
        <Container className="text-center">
          <h1 style={{ 
            fontSize: '3.5rem',
            marginBottom: '1.5rem',
            fontWeight: 700,
            lineHeight: 1.2
          }}>
            Every Drop Counts,<br />Save a Life Today
          </h1>
          
          <p style={{ 
            fontSize: '1.3rem',
            maxWidth: '700px',
            margin: '0 auto 3rem',
            opacity: 0.9
          }}>
            Join our community of heroes who give the gift of life. Your single donation can bring hope to three families.
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Button 
              as={Link} 
              to="/donate" 
              className="btn-premium"
              style={{
                background: 'white',
                color: 'var(--primary)',
                border: 'none'
              }}
            >
              Become a Donor
            </Button>
            
            <Button 
              as={Link} 
              to="/request" 
              className="btn-premium"
              style={{
                background: 'transparent',
                color: 'white',
                border: '2px solid white'
              }}
            >
              Need Blood?
            </Button>
          </div>
        </Container>
      </div>

      {/* Impact Section */}
      <Container style={{ marginBottom: '5rem' }}>
        <Row className="g-4">
          <Col md={4}>
            <Card className="h-100 card-premium border-0">
              <Card.Body className="text-center" style={{ padding: '2.5rem' }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'var(--primary-light)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem'
                }}>
                  <span style={{ fontSize: '2rem', color: 'white' }}>❤️</span>
                </div>
                <h3 style={{ marginBottom: '1rem' }}>Direct Impact</h3>
                <p style={{ color: 'var(--text)' }}>
                  Your donation goes directly to patients in need within 48 hours, making an immediate difference in their lives.
                </p>
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={4}>
            <Card className="h-100 card-premium border-0">
              <Card.Body className="text-center" style={{ padding: '2.5rem' }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'var(--primary-light)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem'
                }}>
                  <span style={{ fontSize: '2rem', color: 'white' }}>🔄</span>
                </div>
                <h3 style={{ marginBottom: '1rem' }}>Regular Donors</h3>
                <p style={{ color: 'var(--text)' }}>
                  Join our elite circle of regular donors who save lives every 3 months with their consistent contributions.
                </p>
              </Card.Body>
            </Card>
          </Col>
          
          <Col md={4}>
            <Card className="h-100 card-premium border-0">
              <Card.Body className="text-center" style={{ padding: '2.5rem' }}>
                <div style={{
                  width: '80px',
                  height: '80px',
                  background: 'var(--primary-light)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  margin: '0 auto 1.5rem'
                }}>
                  <span style={{ fontSize: '2rem', color: 'white' }}>🌍</span>
                </div>
                <h3 style={{ marginBottom: '1rem' }}>Nationwide Network</h3>
                <p style={{ color: 'var(--text)' }}>
                  We connect donors and recipients across the country with our advanced matching system.
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* Call to Action */}
      <div className="section-full" style={{ 
        background: 'var(--light)',
        padding: '5rem 0'
      }}>
        <Container className="text-center">
          <h2 style={{ marginBottom: '1.5rem' }}>Ready to Make a Difference?</h2>
          <p style={{ 
            fontSize: '1.2rem',
            maxWidth: '700px',
            margin: '0 auto 2rem',
            color: 'var(--text)'
          }}>
            Register now and become part of a movement that saves thousands of lives every year.
          </p>
          <Button 
            as={Link} 
            to="/donate" 
            className="btn-premium"
            style={{
              background: 'var(--primary)',
              color: 'white',
              border: 'none',
              padding: '15px 40px',
              fontSize: '1.1rem'
            }}
          >
            Join Our Donor Community
          </Button>
        </Container>
      </div>
    </div>
  )
}