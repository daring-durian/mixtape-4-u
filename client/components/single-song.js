import React from 'react'
import {connect} from 'react-redux'
import {fetchSingleSong} from '../store/single_song'
import {Image, Container, Row, Col, Button} from 'react-bootstrap'

class Single_Song extends React.Component {
  componentDidMount() {
    try {
      this.props.fetchSingleSong(this.props.match.params.songId)
    } catch (error) {
      console.log('I hate this song', error)
    }
  }

  render() {
    const song = this.props.song
    //console.log(song.songUrl)
    return (
      <Container>
        <Row>
          <h1>
            {song.name} by {song.artist}
          </h1>
        </Row>
        <Row>
          <Col>
            <Image src={song.imageUrl} rounded />
          </Col>
          <iframe
            src={song.songUrl}
            width="500"
            height="250"
            frameBorder="0"
            allowTransparency="true"
            allow="encrypted-media"
          />
          <Col />
        </Row>
        <Row>
          <Col>
            <Button variant="secondary">Add To Mix</Button>
            <ul>
              <li>
                <b>Album:</b> {song.album}
              </li>
              <li>
                <b>Year:</b> {song.year}
              </li>
              <li>
                <b>Tags:</b> {song.tags}
              </li>
            </ul>
          </Col>
          <Col />
          <Col />
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = state => {
  return {
    song: state.single_song
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchSingleSong: id => dispatch(fetchSingleSong(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Single_Song)
