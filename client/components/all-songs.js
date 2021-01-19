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
  handleClick(event) {
    console.log('EVENT', event)
    this.props.addSong(event)
    this.props.loadCart()
  }

  render() {
    const songs = this.props.songs
    return (
      <Container fluid="md">
        <CardColumns>
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
                  onClick={id => this.handleClick(song.id)}
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
  songs: state.songs
})

const mapDispatch = dispatch => {
  return {
    loadSongs: () => dispatch(fetchSongs()),
    loadCart: () => dispatch(fetchCart()),
    addSong: id => dispatch(addSongToCart(id))
  }
}

export default connect(mapState, mapDispatch)(Songs)
