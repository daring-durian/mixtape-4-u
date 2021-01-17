import React, {Component} from 'react'
import {Button, Card, Col, ListGroup, Row} from 'react-bootstrap'

export class FilledCart extends Component {
  constructor() {
    super()
  }

  render() {
    // mock data will be removed when the BE issue is fixed: https://github.com/daring-durian/mixtape-4-u/issues/59
    const mixtapes = [
      {
        id: 5,
        medium: 'vinyl',
        name: 'Workout Mixtape',
        price: null,
        createdAt: '2021-01-17T13:53:35.232Z',
        updatedAt: '2021-01-17T13:53:35.254Z',
        orderId: 4,
        songs: [
          {
            id: 3,
            name: 'This Year',
            artist: 'The Mountain Goats',
            album: 'The Sunset Tree',
            year: '2005',
            tags: 'rock',
            imageUrl: '/album-art/AKAA.png',
            songUrl:
              'https://open.spotify.com/embed/track/0s9aeZriwqyBYfxFzsd20R?si=dN0eNchlQKOtF-7S0Sslcg',
            createdAt: '2021-01-17T13:53:35.210Z',
            updatedAt: '2021-01-17T13:53:35.210Z',
            songs_mixtapes: {
              createdAt: '2021-01-17T13:53:35.305Z',
              updatedAt: '2021-01-17T13:53:35.305Z',
              songId: 3,
              mixtapeId: 5
            }
          },
          {
            id: 4,
            name: 'September',
            artist: 'Earth, Wind & Fire',
            album: 'The Best of Earth, Wind & Fire Vol. 1',
            year: '1978',
            tags: 'disco',
            imageUrl: '/album-art/AKAA.png',
            songUrl:
              'https://open.spotify.com/embed/track/2grjqo0Frpf2okIBiifQKs?si=R8EcGX-PTvyYlbcVVDN70g',
            createdAt: '2021-01-17T13:53:35.210Z',
            updatedAt: '2021-01-17T13:53:35.210Z',
            songs_mixtapes: {
              createdAt: '2021-01-17T13:53:35.307Z',
              updatedAt: '2021-01-17T13:53:35.307Z',
              songId: 4,
              mixtapeId: 5
            }
          }
        ]
      },
      {
        id: 3,
        medium: 'vinyl',
        name: 'Yuliyas Mixtape',
        price: null,
        createdAt: '2021-02-17T13:53:35.232Z',
        updatedAt: '2021-02-17T13:53:35.254Z',
        orderId: 5,
        songs: [
          {
            id: 3,
            name: 'This Year',
            artist: 'The Mountain Goats',
            album: 'The Sunset Tree',
            year: '2005',
            tags: 'rock',
            imageUrl: '/album-art/AKAA.png',
            songUrl:
              'https://open.spotify.com/embed/track/0s9aeZriwqyBYfxFzsd20R?si=dN0eNchlQKOtF-7S0Sslcg',
            createdAt: '2021-01-17T13:53:35.210Z',
            updatedAt: '2021-01-17T13:53:35.210Z',
            songs_mixtapes: {
              createdAt: '2021-01-17T13:53:35.305Z',
              updatedAt: '2021-01-17T13:53:35.305Z',
              songId: 3,
              mixtapeId: 5
            }
          },
          {
            id: 4,
            name: 'September',
            artist: 'Earth, Wind & Fire',
            album: 'The Best of Earth, Wind & Fire Vol. 1',
            year: '1978',
            tags: 'disco',
            imageUrl: '/album-art/AKAA.png',
            songUrl:
              'https://open.spotify.com/embed/track/2grjqo0Frpf2okIBiifQKs?si=R8EcGX-PTvyYlbcVVDN70g',
            createdAt: '2021-01-17T13:53:35.210Z',
            updatedAt: '2021-01-17T13:53:35.210Z',
            songs_mixtapes: {
              createdAt: '2021-01-17T13:53:35.307Z',
              updatedAt: '2021-01-17T13:53:35.307Z',
              songId: 4,
              mixtapeId: 5
            }
          }
        ]
      }
    ]
    //const mixtapes = this.props.mixtapes
    const totalItemCount = mixtapes.length
    // total will be calculated once we implement add to cart functionality
    const total = null
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
                <h2>Cart ({totalItemCount} items)</h2>
              </Card.Header>
              <Card.Body>
                {mixtapes.map(mixtape => (
                  <>
                    {/* Mixtape list component will go here */}
                    <Card>
                      <Card.Body>Mixtape card will be rendered here</Card.Body>
                    </Card>
                  </>
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
                  <ListGroup.Item>Subtotal: {total || '$0'}</ListGroup.Item>
                  <ListGroup.Item>Shipping: {shipping}</ListGroup.Item>
                  <ListGroup.Item>
                    <h3>Total: {total || '$0'}</h3>
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
