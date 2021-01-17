import React from 'react'
import {Button, Container} from 'react-bootstrap'

export default function EmptyCart() {
  return (
    <Container className="flex-lg-column align-items-center m-4" fluid>
      <>
        <h1>Looks like your cart is empty.</h1>
        <p>Your mixtapes will show up here.</p>
        <Button>
          <a href="/songs" style={{color: 'white', textDecoration: 'none'}}>
            Continue Shopping
          </a>
        </Button>
      </>
    </Container>
  )
}
