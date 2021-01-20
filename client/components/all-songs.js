import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchSongs} from '../store/songs'
import {addSongToCart, fetchCart} from '../store/cart'
import {createNewOrder} from '../store/orders'
import {Container, CardColumns, Card, Button} from 'react-bootstrap'

/**
 * COMPONENT
 */
class Songs extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
    // this.state = { currentMixtape: null }
  }
  async componentDidMount() {
    this.props.loadSongs()
    this.props.loadCart()
    // this.setState({ currentMixtape: this.props.cart[0] })
  }


  // componentDidUpdate(prevProps, prevState) {
  //   // console.log("PREV PROPS", prevProps)
  //   // console.log("PREV STATE", prevState)
  //   if (prevState.currentMixtape !== this.state.currentMixtape) {
  //     console.log("this.state", this.state.currentMixtape)
  //     this.props.loadCart()
  //   }
  // }

  async handleClick(songId) {
    const currentMixtape = this.props.cart[0]
    if (currentMixtape) {
      this.props.addSong(songId, currentMixtape.id)
      this.props.loadCart()
    } else {
      await this.props.createOrder()
      this.props.loadCart()
      await this.props.addSong(songId, this.state.currentMixtape.id)
    }
  }

  render() {
    const songs = this.props.songs
    const currentMixtape = this.props.cart[0]
    return (
      <Container fluid="md">
        <CardColumns className="m-5">
          {songs.map(song => (
            <Card key={song.id} className="p-3">
              <a href={`/songs/${song.id}`}>
                <Card.Img variant="top" src={song.imageUrl} />
              </a>
              <Card.Body>
                <Card.Title>{song.name}</Card.Title>
                <Card.Subtitle>{song.artist}</Card.Subtitle>
              </Card.Body>
              <Card.Footer>
                <Button
                  variant="secondary"
                  type="submit"
                  className="add-song"
                  onClick={() => this.handleClick(song.id, currentMixtape.id)}
                >
                  <i className="fas fa-cart-plus" />
                </Button>
              </Card.Footer>
            </Card>
          ))}
        </CardColumns>
      </Container>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => ({
  songs: state.songs,
  cart: state.cartReducer
})

const mapDispatch = dispatch => {
  return {
    loadSongs: () => dispatch(fetchSongs()),
    loadCart: () => dispatch(fetchCart()),
    addSong: (songId, mixtapeId) => dispatch(addSongToCart(songId, mixtapeId)),
    createOrder: () => dispatch(createNewOrder())
  }
}

export default connect(mapState, mapDispatch)(Songs)
