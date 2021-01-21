import React from 'react'
import {Link} from 'react-router-dom'
import {Container, Button, Image, Row} from 'react-bootstrap'
import {WEEEEEE} from './cart/confetti'

const Confirmation = () => {
  return (
    <Container
      fluid
      style={{backgroundColor: '#7040C9', height: '100vh'}}
      className="align-items-center d-flex flex-column justify-content-center"
    >
      <WEEEEEE />
      <Row style={{textAlign: 'center', justifyContent: 'center'}}>
        <h1
          style={{
            marginTop: '4rem',
            color: 'white'
          }}
        >
          {'Thank You For Your Purchase!'}
        </h1>
      </Row>
      <Row style={{justifyContent: 'center'}}>
        <Link to="/songs">
          <Button variant="outline-light" size="lg" className="m-4">
            Go make another mixtape!
          </Button>
        </Link>
      </Row>
      <Row style={{justifyContent: 'center'}}>
        <Image
          style={{marginTop: '0rem', width: '400px', height: '400px'}}
          src="https://freesvg.org/img/tapecassette.png"
        />
      </Row>
    </Container>
  )
}

export default Confirmation
