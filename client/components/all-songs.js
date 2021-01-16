import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchSongs, addSongToMix} from '../store/songs'
import {Link} from 'react-router-dom'
import {Container} from 'react-bootstrap'
import CardColumns from 'react-bootstrap/CardColumns'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

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
  // handleClick(event) {
  // 	this.props.addSongToCart();
  // }

  render() {
    const songs = this.props.songs
    return (
      <Container fluid="md">
        <CardColumns>
          {songs.map(song => (
            <Card key={song.id} className="p-3">
              <Card.Img variant="top" src={song.imageUrl} />
              <div className="card-img-overlay">
                <a
                  href={`/songs/${song.id}`}
                  className="stretched-link"
                  id="cardlink"
                />
              </div>
              <Card.Body>
                <Card.Title>{song.artist}</Card.Title>
                <Card.Text>{song.name}</Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button variant="secondary">Add To Mix</Button>
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
    // addSongToCart: id => dispatch(addSongToMix(id))
  }
}

export default connect(mapState, mapDispatch)(Songs)
