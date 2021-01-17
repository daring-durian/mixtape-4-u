// import { Container, Dropdown } from 'react-bootstrap'
import React from 'react'
import EmptyCart from './empty-cart'
import {FilledCart} from './filled-cart'
import {Container} from 'react-bootstrap'
import {connect} from 'react-redux'
import {fetchCart, setLocalStorageItem} from '../../store/cart'

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
    console.log(cart)
    const totalItemCount = cart.length

    return (
      <Container fluid>
        {totalItemCount === 0 ? (
          <EmptyCart />
        ) : (
          <FilledCart totalItemCount={totalItemCount} subTotal={cart.price} />
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
    setLocalStorage: currentCart => dispatch(setLocalStorageItem(currentCart))
  }
}

export default connect(mapState, mapDispatch)(Cart)
