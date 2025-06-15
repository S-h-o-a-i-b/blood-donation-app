import { Container, Row, Col } from 'react-bootstrap'

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-4 mt-5">
      <Container>
        <Row>
          <Col md={4}>
            <h5>Blood Donation</h5>
            <p>Saving lives through blood donation</p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white">Home</a></li>
              <li><a href="/donate" className="text-white">Donate Blood</a></li>
              <li><a href="/request" className="text-white">Request Blood</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <p>Email: contact@blooddonation.com</p>
            <p>Phone: +880 1234 567890</p>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-3">
            <p>&copy; {new Date().getFullYear()} Blood Donation. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}