import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'

const ViewExistingFR = () => {
  return (
    <Container>
      <div className="card">
        <div className="card-header bg-primary text-center">
          <h5 className="text-white">SUBSEQUENT OPINION FORM</h5>
        </div>
        <div className="card-body">
          <Row className="mt-2">
            <Col md={6}>
              <Row>
                <Form.Group as={Col} md={6} className="mt-2">
                  <Form.Label>MLRPMR Transaction No *</Form.Label>
                  <span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
                  <Form.Control type="text" maxLength={50} />
                </Form.Group>
                <Form.Group as={Col} md={6} className="mt-2">
                  <Form.Label>Victim Name *</Form.Label>
                  <span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
                  <Form.Control type="text" maxLength={50} />
                </Form.Group>
                <Form.Group as={Col} md={6} className="mt-2">
                  <Form.Label>Manual MLRPMR No *</Form.Label>
                  <span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
                  <Form.Control type="text" maxLength={50} />
                </Form.Group>
                <Form.Group as={Col} md={6} className="mt-2">
                  <Form.Label>OPD *</Form.Label>
                  <span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
                  <Form.Control type="text" maxLength={50} />
                </Form.Group>
                <Form.Group as={Col} md={6} className="mt-2">
                  <Form.Label>CRN No/Emergency No *</Form.Label>
                  <span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
                  <Form.Control type="text" maxLength={50} />
                </Form.Group>
                <Form.Group as={Col} md={6} className="mt-2">
                  <Form.Label>Date From *</Form.Label>
                  <span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
                  <Form.Control type="date" />
                </Form.Group>
                <Form.Group as={Col} md={6} className="mt-2">
                  <Form.Label>Date To *</Form.Label>
                  <span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
                  <Form.Control type="date" />
                </Form.Group>
              </Row>
            </Col>
            <Col md={6}>
              <Row>
                <Form.Group as={Col} md={6} className="mt-2">
                  <Form.Label>Status *</Form.Label>
                  <span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
                  <Form.Select>
                    <option selected="selected" value="">
                      Select Status
                    </option>
                    <option value={1}>Freeze</option>
                    <option value={2}>Unfreeze</option>
                    <option value={3}>Cancel</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group as={Col} md={6} className="mt-2">
                  <Form.Label>User *</Form.Label>
                  <span style={{ color: 'red', fontWeight: 'bold' }}> *</span>
                  <Form.Select>
                    <option selected="selected" value="">
                      User
                    </option>
                    <option value={1}>Active</option>
                    <option value={2}>De-Active</option>
                  </Form.Select>
                </Form.Group>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    </Container>
  )
}

export default ViewExistingFR
