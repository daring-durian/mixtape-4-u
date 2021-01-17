import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchCart, setLocalStorageItem} from '../store/cart'
import {
  Button,
  Card,
  Container,
  Media,
  Row,
  Col,
  Image,
  ListGroup
} from 'react-bootstrap'

class Cart_Songs_View extends React.Component {
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
    // const availableMixtapeMediums = cart.medium;
    // const availableMixtapeMediums = ['vinyl', 'cassette', 'cd']

    return (
      <Container fluid>
        <div>
          <section>
            <h3>Songs:</h3>
            <ListGroup className="list-unstyled">
              {cartSongs ? (
                <div>
                  {cartSongs.map(song => (
                    <Media as="li" key={song.id}>
                      <img
                        width={150}
                        height={150}
                        className="align-self-center mr-3"
                        src={song.imageUrl}
                        className="shadow-lg mb-5 bg-white"
                      />
                      <Media.Body>
                        <h4 className="cart-song-details-name">
                          Song: "{song.name}"
                        </h4>
                        <p className="cart-song-details">
                          Artist: {song.artist}
                        </p>
                        <p className="cart-song-details">Album: {song.album}</p>
                      </Media.Body>
                      <Button
                        className="cart-song-delete-button"
                        variant="outline-secondary"
                        size="sm"
                      >
                        <img
                          width={25}
                          height={25}
                          src="https://cdn1.iconfinder.com/data/icons/basic-ui-elements-12/512/Basic_Icons-Mini-Source-04-512.png"
                        />Remove Song
                      </Button>
                    </Media>
                  ))}
                </div>
              ) : (
                'Empty Cart'
              )}
            </ListGroup>
          </section>
        </div>
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

export default connect(mapState, mapDispatch)(Cart_Songs_View)
