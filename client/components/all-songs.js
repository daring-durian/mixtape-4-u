import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchSongs} from '../store/songs'
import {Link} from 'react-router-dom'
import {Container, Row, Col} from 'react-bootstrap'
import CardColumns from 'react-bootstrap/CardColumns'
import Card from 'react-bootstrap/Card'

/**
 * COMPONENT
 */
class Songs extends Component {
  constructor(props) {
    super(props)
    // this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.props.loadSongs()
  }
  /*
  add handleclick to add song to cart
  */
  render() {
    const songs = this.props.songs
    return (
      <Container fluid="md">
        <CardColumns>
          {songs.map(song => (
            <Card key={song.id} className="p-3">
              <Card.Img variant="top" src={song.imageUrl} />
              <Card.Body>
                <Card.Title>{song.artist}</Card.Title>
                <Card.Text>{song.name}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">Add To Cart</small>
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
    loadSongs: () => dispatch(fetchSongs())
  }
}

export default connect(mapState, mapDispatch)(Songs)
