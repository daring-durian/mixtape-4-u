import React, {Component} from 'react'
import {Button, Card, Col, ListGroup, Row} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import Cart_Songs_View from './cart-songs-view'
import {fetchCart} from '../../store/cart'
import {connect} from 'react-redux'

class FilledCart extends Component {
  constructor() {
    super()
    this.state = {
      total: 0,
      shipping: 'FREE'
    }
  }

  componentDidMount() {
    // this price changes, but to render updated price, a page refresh is needed :/
    const gotPrice = this.props.mixtapes[0].price
    this.setState({total: gotPrice})
    this.props.getCart()
  }

  render() {
    const mixtapes = this.props.mixtapes
    const totalItemCount = mixtapes.length
    const total = this.state.total
    const shipping = this.state.shipping
    const deleteSong = this.props.deleteSong
    const getCart = this.props.getCart

    return (
      <>
        <Row id="cart-header" className="m-4 justify-content-center">
          <h1>Shopping Cart</h1>
        </Row>
        <Row id="cart-grid">
          <Col sm={8}>
            <Card>
              <Card.Header>
                <h3>{totalItemCount} mixtape(s)</h3>
              </Card.Header>
              <Card.Body>
                {mixtapes.map((mixtape, index) => (
                  <Card key={index} className="m-3">
                    <Cart_Songs_View
                      mixtape={mixtape}
                      deleteSong={deleteSong}
                      getCart={getCart}
                    />
                  </Card>
                ))}
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
                  <ListGroup.Item>
                    Subtotal: {total === null ? '$0' : `$${total}`}
                  </ListGroup.Item>
                  <ListGroup.Item>Shipping: {shipping}</ListGroup.Item>
                  <ListGroup.Item>
                    <h3>Total: {total === null ? '$0' : `$${total}`}</h3>
                  </ListGroup.Item>
                  <Button
                    variant="primary"
                    size="lg"
                    type="submit"
                    as={Link}
                    to="/confirmation"
                  >
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

const mapDispatch = dispatch => {
  return {
    getCart: () => dispatch(fetchCart())
  }
}

export default connect(null, mapDispatch)(FilledCart)
