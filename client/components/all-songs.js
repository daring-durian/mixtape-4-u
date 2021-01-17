import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchSongs} from '../store/songs'
import {addSongToCart} from '../store/cart'
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
  }
  handleClick(event) {
    console.log('EVENT', event)
    this.props.addSong(event)
  }

  render() {
    const songs = this.props.songs
    return (
      <Container fluid="md">
        <CardColumns>
          {songs.map(song => (
            <Card key={song.id} className="p-3">
              <Card.Img variant="top" src={song.imageUrl} />
              <Card.Body>
                <Card.Title>{song.name}</Card.Title>
                <Card.Subtitle>{song.artist}</Card.Subtitle>
              </Card.Body>
              <Card.Footer>
                <Button
                  variant="secondary"
                  type="submit"
                  className="add-song"
                  onClick={() => this.handleClick(song.id)}
                >
                  Add To Mix
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
    addSong: id => dispatch(addSongToCart(id))
  }
}

export default connect(mapState, mapDispatch)(Songs)

{
  /* <a href={`/songs/${song.id}`} className='stretched-link' id='cardlink' /> */
}
