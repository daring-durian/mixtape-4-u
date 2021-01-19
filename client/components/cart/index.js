// import { Container, Dropdown } from 'react-bootstrap'
import React from 'react'
import EmptyCart from './empty-cart'
import {FilledCart} from './filled-cart'
import {Container} from 'react-bootstrap'
import {connect} from 'react-redux'
import {
  fetchCart,
  setLocalStorageItem,
  deleteSongFromCart
} from '../../store/cart'

// Component Tree:
//
// Cart (this component)
//  |__FilledCart
//  |   |__CartSongsView
//  |
//  |__Empty Cart
class Cart extends React.Component {
  constructor() {
    super()
  }

  async componentDidMount() {
    await this.props.getCart()
    await this.props.setLocalStorage(this.props.currentCart)
  }

  render() {
    const cart = this.props.currentCart
    const totalItemCount = cart.length
    const deleteSong = this.props.deleteSong
    const getCart = this.props.getCart

    return (
      <Container fluid>
        {totalItemCount === 0 ? (
          <EmptyCart />
        ) : (
          <FilledCart
            mixtapes={cart}
            deleteSong={deleteSong}
            getCart={getCart}
          />
        )}
      </Container>
    )
  }
}

const mapState = state => {
  return {
    currentCart: state.cartReducer
  }
}

const mapDispatch = dispatch => {
  return {
    getCart: () => dispatch(fetchCart()),
    setLocalStorage: currentCart => dispatch(setLocalStorageItem(currentCart)),
    deleteSong: songId => dispatch(deleteSongFromCart(songId))
  }
}

export default connect(mapState, mapDispatch)(Cart)
