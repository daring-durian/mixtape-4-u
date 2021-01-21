import React from 'react'
import {Link} from 'react-router-dom'
import HomeImage from '../../public/images/home.svg'
import PropTypes from 'prop-types'
import {Card, Col, Row, Container, ResponsiveEmbed} from 'react-bootstrap'
import {connect} from 'react-redux'

/**
 * COMPONENT
 */
export const Home = props => {
  const userFullName = props.name
  const userEmail = props.email

  const welcomeUser = (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <p>Welcome back, {userFullName}!</p>
      <p>Your email is {userEmail}</p>
    </div>
  )

  const welcomeGuest = (
    <div>
      <p>Welcome To Mixtape 4 U</p>
      <Link
        to="/auth/login"
        style={{color: '#ffffff', textDecoration: 'underline'}}
      >
        Please Log in or Sign Up
        <i className="fas fa-chevron-right pl-2" />
      </Link>
    </div>
  )

  return (
    <Container fluid="md ">
      <Row>
        <Col className="align-tems-center">
          <Card
            className="m-5 border-0 d-flex mx-auto"
            style={{
              backgroundColor: '#9c7ebf',
              color: '#ffffff',
              height: '250px',
              borderRadius: '50px',
              maxWidth: '500px'
            }}
          >
            <Card.Body className="d-flex align-items-center justify-content-center">
              <h3>{userFullName ? welcomeUser : welcomeGuest}</h3>
            </Card.Body>
          </Card>

          <Link to="/songs">
            <ResponsiveEmbed aspectRatio="16by9">
              <embed type="image/svg+xml" src={HomeImage} />
            </ResponsiveEmbed>
          </Link>
        </Col>
      </Row>
    </Container>
  )
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    name: state.user.name,
    email: state.user.email
  }
}

export default connect(mapState)(Home)

/**
 * PROP TYPES
 */
Home.propTypes = {
  name: PropTypes.string
}
