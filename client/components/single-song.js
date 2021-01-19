import React from 'react'
import {connect} from 'react-redux'
import {fetchSingleSong} from '../store/single_song'
import {addSongToCart} from '../store/cart'
import {Container, Row, Card, Col, Accordion, Button} from 'react-bootstrap'

class Single_Song extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    try {
      this.props.fetchSingleSong(this.props.match.params.songId)
    } catch (error) {
      console.log('I hate this song', error)
    }
  }

  handleClick(event) {
    console.log('EVENT', event)
    this.props.addSong(event)
  }

  render() {
    const song = this.props.song
    return (
      <Container fluid>
        <Row>
          <h1>
            {song.name} by {song.artist}
          </h1>
        </Row>
        <Row>
          <Col xs={4}>
            <Card style={{width: '20rem'}}>
              <Card.Img variant="top" src={song.imageUrl} />
              <Card.Body>
                <Card.Title>
                  <b>Album: </b>
                  {song.album}
                </Card.Title>
                <Card.Subtitle>
                  <b>Year: </b>
                  {song.year}
                </Card.Subtitle>
              </Card.Body>
              <Card.Footer>
                <Button
                  variant="secondary"
                  type="submit"
                  className="add-song"
                  onClick={() => this.handleClick(song.id)}
                >
                  <i className="fas fa-cart-plus" />
                </Button>
              </Card.Footer>
            </Card>
          </Col>
          <Col>
            <iframe
              src={song.songUrl}
              width="500"
              height="250"
              frameBorder="0"
              allowTransparency="true"
              allow="encrypted-media"
            />
            <Col style={{padding: '1px', width: '500px'}} />
          </Col>
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
    fetchSingleSong: id => dispatch(fetchSingleSong(id)),
    addSong: id => dispatch(addSongToCart(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Single_Song)
