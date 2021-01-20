import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchSongs} from '../store/songs'
import {addSongToCart, fetchCart} from '../store/cart'
import {Container, CardColumns, Card, Button} from 'react-bootstrap'

/**
 * COMPONENT
 */
class Songs extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount() {
    this.props.loadSongs()
    this.props.loadCart()
  }
  handleClick(songId, mixtapeId) {
    this.props.addSong(songId, mixtapeId)
    this.props.loadCart()
  }

  render() {
    const songs = this.props.songs
    const currentMixtape = this.props.cart[0]
    return (
      <Container fluid="md">
        <CardColumns className="m-5">
          {songs.map(song => (
            <Card
              key={song.id}
              className="p-3"
              style={{backgroundColor: '#403F4C', color: '#ffffff'}}
            >
              <a href={`/songs/${song.id}`}>
                <Card.Img variant="top" src={song.imageUrl} />
              </a>
              <Card.Body>
                <Card.Title>{song.name}</Card.Title>
                <Card.Subtitle>{song.artist}</Card.Subtitle>
              </Card.Body>
              <Card.Footer className="border-0">
                <Button
                  variant="secondary"
                  type="submit"
                  className="add-song"
                  onClick={() => this.handleClick(song.id, currentMixtape.id)}
                  style={{
                    backgroundColor: '#A06CD5',
                    border: 'none',
                    height: '50px',
                    width: '50px',
                    borderRadius: '25px'
                  }}
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
    addSong: (songId, mixtapeId) => dispatch(addSongToCart(songId, mixtapeId))
  }
}

export default connect(mapState, mapDispatch)(Songs)
