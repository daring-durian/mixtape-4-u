import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchCart, setLocalStorageItem} from '../store/cart'
import {Button, Card, Col, Container, ListGroup, Row} from 'react-bootstrap'

class Cart extends Component {
  constructor() {
    super()
  }

  async componentDidMount() {
    await this.props.getCart()
    await this.props.setLocalStorage(this.props.currentCart)
  }

  render() {
    const cart = this.props.currentCart
    const cartSongs = cart.songs
    const totalItemsInCart = cart.length
    const subtotal = cart.price
    const shipping = 'FREE'

    return (
      <>
        <Row id="cart-header" className="m-4 justify-content-center">
          <h1>Shopping Cart</h1>
        </Row>
        <Row id="cart-grid">
          <Col sm={8}>
            <Card>
              <Card.Header>
                <h2>Cart ({totalItemsInCart || 0} items)</h2>
              </Card.Header>
              <Card.Body>
                {/* Cart Items (line Items) will go here */}
              </Card.Body>
            </Card>

            <Card className="mt-5">
              <Card.Body>
                <h3>Accepted Payment Methods:</h3>
                <ListGroup horizontal>
                  <ListGroup.Item className="border-0">
                    <h2>
                      <i className="fab fa-cc-visa" />
                    </h2>
                  </ListGroup.Item>
                  <ListGroup.Item className="border-0">
                    <h2>
                      <i className="fab fa-cc-mastercard" />
                    </h2>
                  </ListGroup.Item>
                  <ListGroup.Item className="border-0">
                    <h2>
                      <i className="fab fa-cc-stripe" />
                    </h2>
                  </ListGroup.Item>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={4}>
            <Card>
              <Card.Header>
                <h2>Order Summary</h2>
              </Card.Header>

              <Card.Body>
                <ListGroup variant="flush">
                  <ListGroup.Item>Subtotal: {subtotal || '$0'}</ListGroup.Item>
                  <ListGroup.Item>Shipping: {shipping}</ListGroup.Item>
                  <ListGroup.Item>
                    <h3>Total: {subtotal || '$0'}</h3>
                  </ListGroup.Item>

                  <Button variant="primary" size="lg" type="submit">
                    Check Out
                  </Button>
                </ListGroup>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </>
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
