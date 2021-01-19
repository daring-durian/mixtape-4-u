import React from 'react'
import {Link} from 'react-router-dom'
import {Container, Button, Image, Row} from 'react-bootstrap'

const Confirmation = () => {
  return (
    <Container fluid style={{backgroundColor: '#7040C9'}}>
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
          <Button variant="outline-light">Go make another mixtape!</Button>
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
