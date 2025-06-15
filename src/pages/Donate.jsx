import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap'
import { useState } from 'react'

export default function Donate() {
  const [validated, setValidated] = useState(false)
  const [showAlert, setShowAlert] = useState(false)

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    } else {
      event.preventDefault()
      setShowAlert(true)
    }
    setValidated(true)
  }

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Become a Blood Donor</h2>
      
      {showAlert && (
        <Alert variant="success" dismissible onClose={() => setShowAlert(false)}>
          Thank you for your submission! We will contact you soon.
        </Alert>
      )}

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formName">
            <Form.Label>Full Name</Form.Label>
            <Form.Control required type="text" placeholder="Enter your name" />
            <Form.Control.Feedback type="invalid">
              Please provide your name.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} controlId="formAge">
            <Form.Label>Age</Form.Label>
            <Form.Control required type="number" min="18" max="65" placeholder="Your age" />
            <Form.Control.Feedback type="invalid">
              You must be between 18-65 years.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formBloodGroup">
            <Form.Label>Blood Group</Form.Label>
            <Form.Select required>
              <option value="">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formPhone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control required type="tel" placeholder="Phone number" />
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Email (optional)" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formAddress">
          <Form.Label>Address</Form.Label>
          <Form.Control as="textarea" rows={3} required placeholder="Your address" />
        </Form.Group>

        <div className="text-center">
          <Button variant="danger" type="submit" size="lg">
            Submit Donation Form
          </Button>
        </div>
      </Form>
    </Container>
  )
}