import { Container, Row, Col } from 'react-bootstrap'

export default function ProfessionalAbout() {
  return (
    <div style={{ padding: '5rem 0' }}>
      <Container>
        {/* Mission Section */}
        <Row className="align-items-center mb-6">
          <Col md={6}>
            <h2 style={{ 
              fontSize: '2.5rem',
              marginBottom: '1.5rem',
              color: 'var(--primary)'
            }}>
              Our Life-Saving Mission
            </h2>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              At LifeFlow, we believe no one should die waiting for blood. Founded in 2010, our platform has facilitated over 1 million successful blood donations, creating a nationwide network of compassionate donors.
            </p>
            <p style={{ fontSize: '1.1rem', marginBottom: '1.5rem' }}>
              "The blood you donate gives someone another chance at life. One day that someone may be a close relative, a friend, a loved one—or even you." - Our Founder
            </p>
            <div style={{ 
              background: 'var(--light)',
              padding: '2rem',
              borderRadius: '10px',
              borderLeft: '5px solid var(--primary)'
            }}>
              <h4 style={{ color: 'var(--primary)' }}>Why We Exist</h4>
              <p>
                Every 2 seconds someone needs blood. Our platform bridges the gap between donors and recipients with cutting-edge technology and compassionate service.
              </p>
            </div>
          </Col>
          <Col md={6}>
            <div style={{
              background: 'linear-gradient(135deg, var(--primary-light) 0%, var(--primary) 100%)',
              height: '400px',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: 'white',
              fontSize: '1.5rem',
              fontWeight: 'bold',
              boxShadow: '0 20px 40px rgba(231, 76, 60, 0.2)'
            }}>
              LifeFlow Impact Visualization
            </div>
          </Col>
        </Row>

        {/* Values Section */}
        <div className="section-full" style={{ background: 'var(--light)', padding: '4rem 0' }}>
          <Container>
            <h2 className="text-center mb-5" style={{ color: 'var(--primary)' }}>Our Core Values</h2>
            <Row>
              <Col md={4} className="mb-4">
                <div style={{ textAlign: 'center', padding: '2rem' }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    background: 'var(--primary)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem',
                    color: 'white',
                    fontSize: '1.5rem'
                  }}>
                    ✓
                  </div>
                  <h4 style={{ marginBottom: '1rem' }}>Compassion</h4>
                  <p>
                    We treat every donor and recipient with the utmost care and respect, understanding the emotional journey of blood donation.
                  </p>
                </div>
              </Col>
              <Col md={4} className="mb-4">
                <div style={{ textAlign: 'center', padding: '2rem' }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    background: 'var(--primary)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem',
                    color: 'white',
                    fontSize: '1.5rem'
                  }}>
                    ⚡
                  </div>
                  <h4 style={{ marginBottom: '1rem' }}>Efficiency</h4>
                  <p>
                    Our systems ensure blood reaches those in need within hours, not days. Every second counts when lives are at stake.
                  </p>
                </div>
              </Col>
              <Col md={4} className="mb-4">
                <div style={{ textAlign: 'center', padding: '2rem' }}>
                  <div style={{
                    width: '80px',
                    height: '80px',
                    background: 'var(--primary)',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 1.5rem',
                    color: 'white',
                    fontSize: '1.5rem'
                  }}>
                    ∞
                  </div>
                  <h4 style={{ marginBottom: '1rem' }}>Sustainability</h4>
                  <p>
                    We're building a long-term ecosystem of regular donors to create lasting change in blood availability nationwide.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        {/* Motivational Section */}
        <Row className="mt-6">
          <Col className="text-center">
            <blockquote style={{
              fontSize: '1.5rem',
              fontStyle: 'italic',
              color: 'var(--dark)',
              maxWidth: '800px',
              margin: '0 auto',
              padding: '2rem',
              borderTop: '2px solid var(--primary)',
              borderBottom: '2px solid var(--primary)'
            }}>
              "To the world you may be one person, but to one person you may be the world. Your blood donation doesn't just save a life—it saves families, futures, and dreams."
            </blockquote>
            <p style={{ marginTop: '1.5rem', fontWeight: 500 }}>
              Join our movement today and become someone's hero.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  )
}