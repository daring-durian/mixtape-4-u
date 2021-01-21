import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {
  default as songsReducer,
  fetchSongs,
  removeSong
} from '../../store/songs'

import {Container, CardColumns, Card, Button} from 'react-bootstrap'
import NewSong from './new-song'
import EditSong from './edit-song'
class AdminSongs extends Component {
  componentDidMount() {
    this.props.fetchSongs()
  }

  handleDelete(id) {
    this.props.removeSong(id)
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
                <EditSong song={song} />
                <Button
                  variant="secondary"
                  type="submit"
                  className="delete-song"
                  onClick={() => () => this.handleDelete(song.id)}
                >
                  Delete
                </Button>
              </Card.Footer>
            </Card>
          ))}
        </CardColumns>
      </Container>
    )
  }
}

const mapState = state => ({
  songs: state.songs
})

const mapDispatch = dispatch => ({
  fetchSongs: () => dispatch(fetchSongs()),
  removeSong: id => dispatch(removeSong(id))
})

export default connect(mapState, mapDispatch)(AdminSongs)
