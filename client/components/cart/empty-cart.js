import React from 'react'
import {Button} from 'react-bootstrap'

export default function EmptyCart() {
  return (
    <>
      <h1>Your cart is empty.</h1>
      <p>Your mixtapes will show up here.</p>
      <Button>
        <a href="/songs">Continue Shopping</a>
      </Button>
    </>
  )
}
