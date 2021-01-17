import React, {Component} from 'react'
import {Button, Card, Col, ListGroup, Row} from 'react-bootstrap'

export class FilledCart extends Component {
  constructor() {
    super()
  }

  render() {
    const totalItemCount = this.props.totalItemCount
    const subTotal = this.props.subTotal
    const shipping = 'FREE'

    // totalItemCount, subTotal
    return (
      <>
        <Row id="cart-header" className="m-4 justify-content-center">
          <h1>Shopping Cart</h1>
        </Row>
        <Row id="cart-grid">
          <Col sm={8}>
            <Card>
              <Card.Header>
                <h2>Cart ({totalItemCount || 0} items)</h2>
              </Card.Header>
              <Card.Body>{/* List of mixtapes will go here */}</Card.Body>
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
                  <ListGroup.Item>Subtotal: {subTotal || '$0'}</ListGroup.Item>
                  <ListGroup.Item>Shipping: {shipping}</ListGroup.Item>
                  <ListGroup.Item>
                    <h3>Total: {subTotal || '$0'}</h3>
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
