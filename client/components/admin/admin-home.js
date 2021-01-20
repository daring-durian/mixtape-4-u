import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import {Link} from 'react-router-dom'

/**
 * COMPONENT
 */
const AdminHome = () => (
  <Container fluid>
    <Row>
      <Col />
      <Link to="/admin/users">Users</Link>
      <Col>
        <Link to="/admin/songs">Songs</Link>
      </Col>
    </Row>
  </Container>
)

export default AdminHome
