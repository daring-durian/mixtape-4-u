// import { Container, Dropdown } from 'react-bootstrap'
import React from 'react'
import {EmptyCartScreen} from './empty-cart-screen'
import {Cart} from './cart'
import {Container} from 'react-bootstrap'

export default class CartContainer extends React.Component {
  constructor() {
    super()
  }

  async componentDidMount() {
    await this.props.getCart()
  }

  render() {
    const cart = this.props.currentCart
    const totalItemsInCart = cart.length

    return (
      <Container fluid>
        {totalItemsInCart === 0 ? <EmptyCartScreen /> : <Cart />}
      </Container>
    )
  }
}
