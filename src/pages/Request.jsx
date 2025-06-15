import { Container, Form, Button, Row, Col, Alert, Table } from 'react-bootstrap'
import { useState } from 'react'

const donors = [
  { id: 1, name: 'John Doe', bloodGroup: 'A+', location: 'Dhaka', lastDonation: '2023-05-15', contact: '01712345678' },
  { id: 2, name: 'Jane Smith', bloodGroup: 'B-', location: 'Chittagong', lastDonation: '2023-06-20', contact: '01898765432' },
  { id: 3, name: 'Robert Khan', bloodGroup: 'O+', location: 'Dhaka', lastDonation: '2023-04-10', contact: '01911223344' },
]

export default function Request() {
  const [bloodGroup, setBloodGroup] = useState('')
  const [location, setLocation] = useState('')
  const [results, setResults] = useState([])

  const handleSearch = (e) => {
    e.preventDefault()
    const filtered = donors.filter(donor => 
      donor.bloodGroup === bloodGroup && 
      donor.location.toLowerCase().includes(location.toLowerCase())
    )
    setResults(filtered)
  }

  return (
    <Container className="my-5">
      <h2 className="text-center mb-4">Request Blood</h2>
      
      <Form onSubmit={handleSearch}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="searchBloodGroup">
            <Form.Label>Blood Group Needed</Form.Label>
            <Form.Select required value={bloodGroup} onChange={(e) => setBloodGroup(e.target.value)}>
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

          <Form.Group as={Col} controlId="searchLocation">
            <Form.Label>Location (City)</Form.Label>
            <Form.Control 
              type="text" 
              required 
              value={location} 
              onChange={(e) => setLocation(e.target.value)} 
              placeholder="Enter city" 
            />
          </Form.Group>
        </Row>

        <div className="text-center mb-4">
          <Button variant="danger" type="submit" size="lg">
            Search Donors
          </Button>
        </div>
      </Form>

      {results.length > 0 ? (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>Name</th>
              <th>Blood Group</th>
              <th>Location</th>
              <th>Last Donation</th>
              <th>Contact</th>
            </tr>
          </thead>
          <tbody>
            {results.map(donor => (
              <tr key={donor.id}>
                <td>{donor.name}</td>
                <td>{donor.bloodGroup}</td>
                <td>{donor.location}</td>
                <td>{donor.lastDonation}</td>
                <td>{donor.contact}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      ) : (
        bloodGroup && location && (
          <Alert variant="info">
            No donors found matching your criteria. Please try different search parameters.
          </Alert>
        )
      )}
    </Container>
  )
}